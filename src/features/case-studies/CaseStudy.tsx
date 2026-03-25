import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { MarkdownContent } from "../blog"
import { MarkdownRenderer } from "../blog/MarkdownRenderer"
import { TableOfContents } from "./TableOfContents"

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const [markdown, setMarkdown] = useState<null | string>(null)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    async function loadMarkdown() {
      try {
        const file = await import(`./content/${slug}.md`)
        const response = await fetch(file.default)
        const text = await response.text()
        setMarkdown(text)
      } catch (err) {
        console.error("Error loading markdown:", err)
        setError("Project write-up not found.")
      }
    }

    loadMarkdown()
  }, [slug])

  if (error) {
    return (
      <Box
        textAlign="center"
        mt={9}
      >
        <Typography>{error}</Typography>
      </Box>
    )
  }

  if (!markdown) {
    return (
      <Box
        textAlign="center"
        mt={9}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box
      pt={3}
      pb={3}
      gap={4}
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <Box
        component="aside"
        sx={{
          top: 75,
          flexShrink: 0,
          position: "sticky",
          height: "fit-content",
        }}
      >
        <TableOfContents headings={new MarkdownContent(markdown).tocHeadings()} />
      </Box>
      <Box sx={{ maxWidth: 900 }}>
        <MarkdownRenderer markdown={markdown} />
      </Box>
    </Box>
  )
}
