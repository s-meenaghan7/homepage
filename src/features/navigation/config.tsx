import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import type { JSX } from "react"

export interface NavButtonConfig {
  id: string
  label: string
  icon: JSX.Element
}

const navButtonsConfig: NavButtonConfig[] = [
  {
    id: "intro",
    label: "Sean Meenaghan",
    icon: <HomeOutlinedIcon />,
  },
  // {
  //   id: "about",
  //   label: "About",
  //   icon: <PersonOutlineOutlinedIcon />,
  // },
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

export { navButtonsConfig }
