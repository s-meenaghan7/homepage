import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import IconButton from "@mui/material/IconButton"
import { useColorScheme } from "@mui/material/styles"
import Tooltip from "@mui/material/Tooltip"
import { useState } from "react"

export function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme()
  const [tooltipText, setTooltipText] = useState("")

  const toggleMode = (mode: "light" | "dark" | "system" | undefined) => {
    return mode === "dark" ? "light" : "dark"
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const newMode = toggleMode(mode)
    setMode(newMode)
    setTooltipText(`Using ${newMode} mode!`)
  }

  if (!mode) return null

  return (
    <Tooltip
      enterDelay={100}
      title={tooltipText}
      onOpen={() => setTooltipText(`Use ${toggleMode(mode)} mode`)}
    >
      <IconButton onClick={handleClick}>
        {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Tooltip>
  )
}
