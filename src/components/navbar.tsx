import GitHub from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import { alpha } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import useActiveSection from "../hooks/useActiveSection"
import NavButton from "./navbutton"

const sections = ["intro", "about", "experience", "projects", "contact"]

export default function NavBar() {
  const activeSection = useActiveSection(sections)

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={(theme) => ({
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(8px)",
        zIndex: theme.zIndex.drawer + 1,
      })}
    >
      <Container>
        <Toolbar disableGutters>
          <NavButton
            sectionId="intro"
            label="Sean Meenaghan"
            active={activeSection === "intro"}
          />

          <Box
            sx={{
              display: "flex",
              marginLeft: "auto",
              gap: 2,
            }}
          >
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn color="primary" />
              </IconButton>
            </Tooltip>

            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub color="primary" />
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginLeft: "auto",
              gap: 2,
            }}
          >
            {sections.slice(1).map((section) => (
              <NavButton
                key={section}
                sectionId={section}
                label={section.charAt(0).toUpperCase().concat(section.slice(1))}
                active={activeSection === section}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
