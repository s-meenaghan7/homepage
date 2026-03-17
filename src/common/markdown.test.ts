import { describe, expect, it } from "vitest"
import { MarkdownContent } from "./markdown"

describe("MarkdownContent", () => {
  it("should read markdown content from a file and parse the table of contents", () => {
    const markdownContent =
      "# Heading 1\nSome content here\n## Subheading 1\nMore content"
    const markdown = new MarkdownContent(markdownContent)
    const toc = markdown.tocHeadings()

    const expectedToc = [
      "- [Heading 1](#heading-1)",
      "  - [Subheading 1](#subheading-1)",
    ]

    expect(toc).toEqual(expectedToc)
  })
})
