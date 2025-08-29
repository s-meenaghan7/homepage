import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"

export default function NavBarMobile() {
  return (
    <Toolbar sx={{ flexDirection: "row-reverse" }}>
      <Tooltip title="Menu">
        <IconButton>
          <MenuRoundedIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  )
}
