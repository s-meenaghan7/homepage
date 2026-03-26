import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useState } from "react"
import { TocLinks } from "./TocLinks"
import { TocToggleButton } from "./TocToggleButton"

interface Props {
  headings: Map<string, string>
}

export function TableOfContents({ headings }: Props) {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const [isVisible, setIsVisible] = useState(true)

  if (!isLargeScreen) {
    // TODO: implement mobile-friendly table of contents
    return null
  }

  return (
    <Box p={1}>
      {isVisible ? (
        <Box>
          <Box
            gap={3}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Typography variant="h6">Table of Contents</Typography>
            <TocToggleButton
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          </Box>
          <TocLinks headings={headings} />
        </Box>
      ) : (
        <TocToggleButton
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
    </Box>
  )
}
