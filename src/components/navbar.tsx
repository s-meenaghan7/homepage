import { AppBar, Box, Container, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"
import NavButton from "./navbutton"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { GitHub, LinkedIn } from "@mui/icons-material"

export default function NavBar() {
    return (
        <AppBar
            position="sticky"
            sx={{ bgcolor: "inherit" }}
        >
            <Container>
                <Toolbar disableGutters>
                    <NavButton sx={{ flexGrow: 1 }} icon={<HomeOutlinedIcon />}>
                        <Typography variant="h6">
                            Sean Meenaghan
                        </Typography>
                    </NavButton>

                    <Box
                        sx={{
                            display: "flex",
                            marginLeft: 'auto',
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

                        <Tooltip title='GitHub'>
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
                            marginLeft: 'auto',
                            gap: 2,
                        }}
                    >
                        <NavButton>
                            About
                        </NavButton>
                        <NavButton>
                            Experience
                        </NavButton>
                        <NavButton>
                            Projects
                        </NavButton>
                        <NavButton>
                            Contact
                        </NavButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
