import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import { alpha, useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import useActiveSection from "../hooks/useActiveSection"
import NavBarMobile from "./NavBarMobile"
import NavBarStandard from "./NavBarStandard"

const navButtons = [
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

export default function NavBarContainer() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const activeSection = useActiveSection(navButtons.map((s) => s.id))

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
        {isSmallScreen ? (
          <NavBarMobile />
        ) : (
          <NavBarStandard
            activeSection={activeSection ?? ""}
            navButtons={navButtons}
          />
        )}
      </Container>
    </AppBar>
  )
}
