import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import { useState } from "react"
import type { NavButtonConfig } from "./config"
import { NavDialog } from "./NavDialog"

interface NavBarMobileProps {
  navButtons: NavButtonConfig[]
}

export function NavBarMobile({ navButtons }: NavBarMobileProps) {
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

      <Tooltip title="Menu">
        <IconButton onClick={openDialog}>
          <MenuRoundedIcon />
        </IconButton>
      </Tooltip>

      <NavDialog
        open={open}
        onClose={closeDialog}
        navButtons={navButtonConfigs}
      />
    </Toolbar>
  )
}
