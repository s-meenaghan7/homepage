import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import { alpha, useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { navButtonsConfig } from "./config"
import { useActiveSection } from "./hooks/useActiveSection"
import { NavBarMobile } from "./NavBarMobile"
import { NavBarStandard } from "./NavBarStandard"

export function NavBarContainer() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const activeSection = useActiveSection(navButtonsConfig.map((s) => s.id))

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={(theme) => ({
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(8px)",
        zIndex: theme.zIndex.drawer + 1,
      })}
    >
      <Container>
        {isSmallScreen ? (
          <NavBarMobile navButtons={navButtonsConfig} />
        ) : (
          <NavBarStandard
            activeSection={activeSection ?? ""}
            navButtons={navButtonsConfig}
          />
        )}
      </Container>
    </AppBar>
  )
}
