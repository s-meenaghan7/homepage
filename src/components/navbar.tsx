import GitHub from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { alpha } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import useActiveSection from "../hooks/useActiveSection"
import ContactButton from "./ContactButton"
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
            <ContactButton
              href="https://linkedin.com/in/seanmeenaghan"
              title="LinkedIn"
              icon={<LinkedIn />}
            />

            <ContactButton
              href="https://github.com/s-meenaghan7"
              title="GitHub"
              icon={<GitHub />}
            />
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
