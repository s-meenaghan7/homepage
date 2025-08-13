import { AppBar, Box, Container, Toolbar } from "@mui/material"
import NavButton from "./navbutton"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined'

export default function NavBar() {
    return (
        <AppBar
            position="sticky"
            sx={{ bgcolor: "inherit", color: "black" }}
        >
            <Container>
                <Toolbar disableGutters>
                    <NavButton sx={{ flexGrow: 1 }} icon={<HomeOutlinedIcon />}>
                        Sean Meenaghan
                    </NavButton>

                    <Box
                        sx={{
                            display: "flex",
                            marginLeft: 'auto',
                            gap: 2,
                        }}
                    >
                        <NavButton icon={<EmojiPeopleOutlinedIcon />}>
                            About
                        </NavButton>
                        <NavButton icon={<VerifiedUserOutlinedIcon />}>
                            Experience
                        </NavButton>
                        <NavButton icon={<AutoStoriesOutlinedIcon />}>
                            Projects
                        </NavButton>
                        <NavButton icon={<EmailOutlinedIcon />}>
                            Contact
                        </NavButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
