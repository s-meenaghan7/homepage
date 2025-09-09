import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

export function TechSummary() {
  const theme = useTheme()
  const isLargeScreen = !useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box borderRadius={3}>
      <Box
        p={1}
        display="flex"
        flexWrap="wrap"
        maxWidth="100vw"
        borderRadius={3}
      >
        <Stack
          gap={1}
          display="flex"
          justifyContent={isLargeScreen ? undefined : "center"}
          flexWrap="wrap"
          direction="row"
        >
          <Chip
            size="small"
            variant="outlined"
            label="TypeScript"
          />
          <Chip
            size="small"
            variant="outlined"
            label="Node.js"
          />
          <Chip
            size="small"
            variant="outlined"
            label="Python"
          />
          <Chip
            size="small"
            variant="outlined"
            label="React"
          />
          <Chip
            size="small"
            variant="outlined"
            label="Material UI"
          />
          <Chip
            size="small"
            variant="outlined"
            label="OOP / OOD"
          />
          <Chip
            size="small"
            variant="outlined"
            label="Git VCS"
          />
          <Chip
            size="small"
            variant="outlined"
            label="GitHub Actions"
          />
          <Chip
            size="small"
            variant="outlined"
            label="DataDog"
          />
          <Chip
            size="small"
            variant="outlined"
            label="Splunk"
          />
          <Chip
            size="small"
            variant="outlined"
            label="Atlassian Administration"
          />
        </Stack>
      </Box>
    </Box>
  )
}
