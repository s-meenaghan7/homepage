import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import GitHub from "@mui/icons-material/GitHub"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LinkedIn from "@mui/icons-material/LinkedIn"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { alpha } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import useActiveSection from "../hooks/useActiveSection"
import ColorSchemeToggle from "./ColorSchemeToggle"
import ContactButton from "./ContactButton"
import NavButton from "./NavButton"

const sections = [
  {
    id: "about",
    label: "About",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <WorkOutlineIcon />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <AutoStoriesOutlinedIcon />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <EmailOutlinedIcon />,
  },
]

export default function NavBar() {
  const activeSection = useActiveSection(sections.map((s) => s.id))

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
            icon={<HomeOutlinedIcon />}
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
            {sections.map((section) => (
              <NavButton
                key={section.id}
                icon={section.icon}
                label={section.label}
                sectionId={section.id}
                active={activeSection === section.id}
              />
            ))}
            <ColorSchemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
