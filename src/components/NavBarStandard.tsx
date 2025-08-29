import GitHub from "@mui/icons-material/GitHub"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LinkedIn from "@mui/icons-material/LinkedIn"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import type { JSX } from "react"
import ColorSchemeToggle from "./ColorSchemeToggle"
import ContactButton from "./ContactButton"
import NavButton from "./NavButton"

interface NavBarStandardProps {
  navButtons: { id: string; label: string; icon: JSX.Element }[]
  activeSection: string
}

export default function NavBarStandard({
  navButtons,
  activeSection,
}: NavBarStandardProps) {
  return (
    <Toolbar disableGutters>
      <NavButton
        sectionId="intro"
        label="Sean Meenaghan"
        active={activeSection === "intro"}
        icon={<HomeOutlinedIcon />}
      />

      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          gap: 2,
        }}
      >
        <ContactButton
          href="https://linkedin.com/in/seanmeenaghan"
          title="LinkedIn"
          icon={<LinkedIn />}
        />

        <ContactButton
          href="https://github.com/s-meenaghan7"
          title="GitHub"
          icon={<GitHub />}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          gap: 2,
        }}
      >
        {navButtons.map((btn) => (
          <NavButton
            key={btn.id}
            icon={btn.icon}
            label={btn.label}
            sectionId={btn.id}
            active={activeSection === btn.id}
          />
        ))}
        <ColorSchemeToggle />
      </Box>
    </Toolbar>
  )
}
