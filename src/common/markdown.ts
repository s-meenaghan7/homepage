/**
 * Class for consuming markdown content from a file and processing it.
 */
export class MarkdownContent {
  private markdown: string
  private tableOfContents: string[] | undefined = undefined

  /**
   * Creates an instance of MarkdownContent.
   * @param markdown - The markdown content to process.
   */
  constructor(markdown: string) {
    this.markdown = markdown
  }

  /**
   * Parses the markdown content and generates an array of Table of Contents headings. It supports multiple levels of headings and formats them as a nested list.
   * @returns The generated table of contents.
   */
  tocHeadings(): string[] {
    if (this.tableOfContents) {
      return this.tableOfContents
    }

    let lines = this.markdown.split("\n")
    let tocLines: string[] = []
    let headingStack: number[] = []

    for (let line of lines) {
      let match = line.match(/^(#+)\s+(.*)/)
      if (!match) continue

      let level = match[1].length
      let title = match[2].trim()

      while (
        headingStack.length > 0 &&
        headingStack[headingStack.length - 1] >= level
      ) {
        headingStack.pop()
      }

      headingStack.push(level)

      let indent = "  ".repeat(headingStack.length - 1)
      let slug = title
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/^-+|-+$/g, "")
      tocLines.push(`${indent}- [${title}](#${slug})`)
    }
    this.tableOfContents = tocLines

    return this.tableOfContents
  }
}
