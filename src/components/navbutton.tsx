import type { ButtonProps } from "@mui/material/Button"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "@mui/material/styles"
import Tooltip from "@mui/material/Tooltip"
import useMediaQuery from "@mui/material/useMediaQuery"
import type { JSX } from "react"

interface NavButtonProps extends ButtonProps {
  label: string
  active: boolean
  sectionId: string
  icon: JSX.Element
}

export default function NavButton({ sectionId, label, active, icon }: NavButtonProps) {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (isMediumScreen) {
    return (
      <Tooltip title={label}>
        <IconButton
          onClick={handleClick}
          sx={{
            color: "text.primary",
            fontWeight: active ? "bold" : "normal",
          }}
        >
          {icon}
        </IconButton>
      </Tooltip>
    )
  }

  return (
    <Button
      onClick={handleClick}
      sx={{
        position: "relative",
        overflow: "visible",
        fontWeight: active ? "bold" : "normal",
        transition: "font-weight 0.1s ease-in-out",
      }}
    >
      {label}
    </Button>
  )
}
