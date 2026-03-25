import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useState } from "react"

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

  return isVisible ? (
    <Box p={1}>
      <Box
        gap={3}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Typography variant="h6">Table of Contents</Typography>
        <Button
          size="small"
          variant="outlined"
          title="Hide the table of contents"
          onClick={() => setIsVisible(!isVisible)}
        >
          Hide
        </Button>
      </Box>
      <List>
        {Array.from(headings.entries()).map(([title, slug], index) => (
          <ListItem
            key={index}
            sx={{
              p: 0.5,
            }}
          >
            <Link
              color="#0099ff"
              title={title}
              href={`#${slug}`}
            >
              {title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  ) : (
    <Box
      gap={3}
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Button
        size="small"
        variant="outlined"
        title="Table of contents"
        onClick={() => setIsVisible(!isVisible)}
      >
        <FormatListBulletedRoundedIcon />
      </Button>
    </Box>
  )
}
