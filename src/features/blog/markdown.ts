/**
 * Class for consuming markdown content from a file and processing it.
 */
export class MarkdownContent {
  private markdown: string
  private headings: Map<string, string> | undefined = undefined

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
   * Parses the markdown content and generates an array of Table of Contents headings. It supports multiple levels of headings and formats them as a nested list. The h1 headings are ignored since they are reserved for the case study title; only h2 and below are included in the table of contents.
   * @returns The generated table of contents.
   */
  tocHeadings(): Map<string, string> {
    if (this.headings) {
      return this.headings
    }

    let headingsMap = new Map<string, string>()
    let headingStack: number[] = []
    let lines = this.markdown.split("\n")

    for (let line of lines) {
      let match = line.match(/^(##+)\s+(.*)/)
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

      // TODO: indent is commented out for now since we aren't currently supporting nested headings in the table of contents, but we should add it back in once we do.
      // let indent = "  ".repeat(headingStack.length - 1)
      let slug = MarkdownContent.slugify(title)
      headingsMap.set(title, slug)
    }
    this.headings = headingsMap

    return this.headings
  }
}
