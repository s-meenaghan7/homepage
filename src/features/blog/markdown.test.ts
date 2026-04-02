import { describe, expect, it } from "vitest"
import { MarkdownContent } from "./markdown"

describe("MarkdownContent.tocHeadings", () => {
  it("should parse headings and generate a table of contents, ignoring h1 headings", () => {
    const markdownContent =
      "# Heading 1\nThis heading is ignored\n## Subheading 1\nMore content\n### Heading 2\nContent under heading 2"
    const markdown = new MarkdownContent(markdownContent)
    const toc = markdown.tocHeadings()

    const expectedToc = new Map([
      ["Subheading 1", "subheading-1"],
      ["Heading 2", "heading-2"],
    ])

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
