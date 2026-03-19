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
   * Returns the markdown slug for a given text, which can be used as an ID link in markdown headers. This is done by:
   * - converting the text to lowercase
   * - replacing non-word characters with hyphens
   * - trimming leading and trailing hyphens.
   * @param text the text to render as a markdown slug link.
   * @returns the markdown slug as an ID link
   */
  static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/^-+|-+$/g, "")
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
      let slug = MarkdownContent.slugify(title)
      tocLines.push(`${indent}- [${title}](#${slug})`)
    }
    this.tableOfContents = tocLines

    return this.tableOfContents
  }
}
