import { describe, expect, it } from "vitest"
import { MarkdownContent } from "./markdown"

describe("MarkdownContent", () => {
  it("should read markdown content and parse the table of contents", () => {
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

describe("MarkdownContent.slugify", () => {
  it.each([
    {
      name: "should convert text to a markdown slug",
      input: "Hello World! This is a test.",
      expected: "hello-world-this-is-a-test",
    },
    {
      name: "should handle leading and trailing non-word characters",
      input: "  Hello World!  ",
      expected: "hello-world",
    },
    {
      name: "should replace multiple non-word characters with a single hyphen",
      input: "Hello   World!!!",
      expected: "hello-world",
    },
  ])("$name", ({ input, expected }) => {
    const slug = MarkdownContent.slugify(input)
    expect(slug).toBe(expected)
  })
})
