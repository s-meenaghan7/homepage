import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Grid from "@mui/material/Grid"
import { useEffect, useState } from "react"

interface VisitorCountResponse {
  count: number
}

export function VisitorCounter({ pageId }: { pageId: string }) {
  const [count, setCount] = useState<number | null>(null)

  const VISITOR_API_URL: string = `${import.meta.env.VITE_API_URL}/v1/visitor/${pageId}`

  useEffect(() => {
    async function fetchVisitorCount() {
      try {
        const response = await fetch(VISITOR_API_URL, { method: "POST" })
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }
        const data: VisitorCountResponse = await response.json()
        setCount(data.count)
      } catch (err) {
        console.error("Failed to fetch visitor count:", err)
        setCount(-1)
      }
    }

    fetchVisitorCount()
  }, [VISITOR_API_URL])

  return (
    <Grid
      py={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={3}
        py={1}
        borderRadius={5}
        border="3px solid lightgrey"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {count !== null ? count : <CircularProgress size={22} />}
      </Box>
    </Grid>
  )
}
