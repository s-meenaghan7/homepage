import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import { alpha, useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import type { JSX } from "react"
import useActiveSection from "../hooks/useActiveSection"
import NavBarMobile from "./NavBarMobile"
import NavBarStandard from "./NavBarStandard"

const handleClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
  e.preventDefault()

  const target = document.getElementById(sectionId)
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export interface NavButtonConfig {
  id: string
  label: string
  icon: JSX.Element
  onClick: typeof handleClick
}

const navButtons: NavButtonConfig[] = [
  {
    id: "intro",
    label: "Sean Meenaghan",
    icon: <HomeOutlinedIcon />,
    onClick: handleClick,
  },
  {
    id: "about",
    label: "About",
    icon: <PersonOutlineOutlinedIcon />,
    onClick: handleClick,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <WorkOutlineIcon />,
    onClick: handleClick,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <AutoStoriesOutlinedIcon />,
    onClick: handleClick,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <EmailOutlinedIcon />,
    onClick: handleClick,
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
          <NavBarMobile navButtons={navButtons} />
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
