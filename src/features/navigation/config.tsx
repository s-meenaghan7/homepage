import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import type { JSX } from "react"

const navButtonClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
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
  onClick: typeof navButtonClick
}

const navButtonsConfig: NavButtonConfig[] = [
  {
    id: "intro",
    label: "Sean Meenaghan",
    onClick: navButtonClick,
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "about",
    label: "About",
    onClick: navButtonClick,
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: "experience",
    label: "Experience",
    onClick: navButtonClick,
    icon: <WorkOutlineIcon />,
  },
  {
    id: "projects",
    label: "Projects",
    onClick: navButtonClick,
    icon: <AutoStoriesOutlinedIcon />,
  },
  {
    id: "contact",
    label: "Contact",
    onClick: navButtonClick,
    icon: <EmailOutlinedIcon />,
  },
]

export { navButtonsConfig }
