import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { MarkdownRenderer } from "../../common/MarkdownRenderer"

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
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 8, p: 3 }}>
      <MarkdownRenderer markdown={markdown} />
    </Box>
  )
}
