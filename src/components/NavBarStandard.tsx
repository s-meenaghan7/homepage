import GitHub from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import ColorSchemeToggle from "./ColorSchemeToggle"
import ContactButton from "./ContactButton"
import type { NavButtonConfig } from "./NavBarContainer"
import NavButton from "./NavButton"

interface NavBarStandardProps {
  navButtons: NavButtonConfig[]
  activeSection: string
}

export default function NavBarStandard({
  navButtons,
  activeSection,
}: NavBarStandardProps) {
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
        <ContactButton
          title="LinkedIn"
          icon={<LinkedIn />}
          href="https://linkedin.com/in/seanmeenaghan"
        />

        <ContactButton
          title="GitHub"
          icon={<GitHub />}
          href="https://github.com/s-meenaghan7"
        />
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
