import GitHub from "@mui/icons-material/GitHub"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LinkedIn from "@mui/icons-material/LinkedIn"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import { alpha } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import NavButton from "./navbutton"

export default function NavBar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={(theme) => ({
        backgroundColor: alpha(theme.palette.background.paper, 0.8), // translucent
        backdropFilter: "blur(8px)", // subtle blur effect
        zIndex: theme.zIndex.drawer + 1, // ensure it's above other components
      })}
    >
      <Container>
        <Toolbar disableGutters>
          <NavButton sx={{ flexGrow: 1 }} icon={<HomeOutlinedIcon />}>
            <Typography variant="h6">Sean Meenaghan</Typography>
          </NavButton>

          <Box
            sx={{
              display: "flex",
              marginLeft: "auto",
              gap: 2,
            }}
          >
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn color="primary" />
              </IconButton>
            </Tooltip>

            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub color="primary" />
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginLeft: "auto",
              gap: 2,
            }}
          >
            <NavButton>About</NavButton>
            <NavButton>Experience</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>Contact</NavButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
