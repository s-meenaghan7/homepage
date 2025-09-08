import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import { useState } from "react"
import { ColorSchemeToggle } from "./ColorSchemeToggle"
import type { NavButtonConfig } from "./config"
import { NavDialog } from "./NavDialog"

interface NavBarMobileProps {
  activeSection: string
  navButtons: NavButtonConfig[]
}

export function NavBarMobile({ navButtons, activeSection }: NavBarMobileProps) {
  const [open, setOpen] = useState(false)
  const [homeButton, ...navButtonConfigs] = navButtons

  const openDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }

  return (
    <Toolbar sx={{ justifyContent: "space-between" }}>
      {homeButton && (
        <Tooltip title="Home">
          <IconButton onClick={(e) => homeButton.onClick(e, homeButton.id)}>
            {homeButton.icon}
          </IconButton>
        </Tooltip>
      )}

      <Box
        display="flex"
        gap={1}
      >
        <ColorSchemeToggle />
        <Tooltip title="Menu">
          <IconButton onClick={openDialog}>
            <MenuRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <NavDialog
        open={open}
        onClose={closeDialog}
        activeSection={activeSection}
        navButtons={navButtonConfigs}
      />
    </Toolbar>
  )
}
