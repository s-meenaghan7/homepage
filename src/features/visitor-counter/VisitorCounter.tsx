import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useEffect, useState } from "react"

interface VisitorCountResponse {
  count: number
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  const API_URL: string = import.meta.env.VITE_API_URL

  useEffect(() => {
    async function fetchVisitorCount() {
      try {
        const response = await fetch(API_URL, { method: "POST" })
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
  }, [API_URL])

  return (
    <Grid
      py={3}
      justifyItems="center"
    >
      <Box
        px={3}
        py={1}
        borderRadius={5}
        border="3px solid lightgrey"
      >
        {count}
      </Box>
    </Grid>
  )
}
