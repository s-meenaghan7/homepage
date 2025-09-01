import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "@mui/material/styles"
import Tooltip from "@mui/material/Tooltip"
import useMediaQuery from "@mui/material/useMediaQuery"
import type { JSX } from "react"

interface NavButtonProps {
  label: string
  active: boolean
  sectionId: string
  icon: JSX.Element
  onClick: (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => void
}

export function NavButton({ sectionId, label, active, icon, onClick }: NavButtonProps) {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  if (isSmallScreen) {
    return (
      <Button
        size="large"
        startIcon={icon}
        onClick={(e) => onClick(e, sectionId)}
        sx={{
          position: "relative",
          overflow: "visible",
          fontWeight: active ? "bold" : "normal",
          transition: "font-weight 0.1s ease-in-out",
          transform: "scale(1.5)",
          transformOrigin: "center",
          my: 3,
        }}
      >
        {label}
      </Button>
    )
  }

  if (isMediumScreen) {
    return (
      <Tooltip title={label}>
        <IconButton
          onClick={(e) => onClick(e, sectionId)}
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
      onClick={(e) => onClick(e, sectionId)}
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
