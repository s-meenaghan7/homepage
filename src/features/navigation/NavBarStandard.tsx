import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { GitHubButton } from "../../common/GitHubButton"
import { LinkedInButton } from "../../common/LinkedInButton"
import { ColorSchemeToggle } from "./ColorSchemeToggle"
import type { NavButtonConfig } from "./config"
import { NavButton } from "./NavButton"

interface NavBarStandardProps {
  navButtons: NavButtonConfig[]
  activeSection: string
}

export function NavBarStandard({ navButtons, activeSection }: NavBarStandardProps) {
  const [homeButton, ...navButtonConfigs] = navButtons

  return (
    <Toolbar disableGutters>
      {homeButton && (
        <NavButton
          icon={homeButton.icon}
          label={homeButton.label}
          sectionId={homeButton.id}
          onClick={homeButton.onClick}
          active={activeSection === homeButton.id}
        />
      )}

      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          gap: 2,
        }}
      >
        <LinkedInButton />
        <GitHubButton />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          gap: 2,
        }}
      >
        {navButtonConfigs.map((btn) => (
          <NavButton
            key={btn.id}
            icon={btn.icon}
            label={btn.label}
            sectionId={btn.id}
            onClick={btn.onClick}
            active={activeSection === btn.id}
          />
        ))}

        <ColorSchemeToggle />
      </Box>
    </Toolbar>
  )
}
