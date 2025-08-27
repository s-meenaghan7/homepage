import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import IconButton from "@mui/material/IconButton"
import { useColorScheme } from "@mui/material/styles"
import Tooltip from "@mui/material/Tooltip"

export default function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme()

  const toggleMode = (mode: "light" | "dark" | "system" | undefined) => {
    return mode === "dark" ? "light" : "dark"
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setMode(toggleMode(mode))
  }

  if (!mode) return null

  return (
    <Tooltip
      title={`Change to ${toggleMode(mode)} mode`}
      enterDelay={500}
    >
      <IconButton onClick={handleClick}>
        {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Tooltip>
  )
}
