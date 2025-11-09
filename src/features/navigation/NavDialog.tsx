import Box from "@mui/material/Box"
import DialogContent from "@mui/material/DialogContent"
import { FullScreenDialog } from "../../common"
import type { NavButtonConfig } from "./config"
import { NavButton } from "./NavButton"

interface NavDialogProps {
  open: boolean
  onClose: () => void
  activeSection: string
  navButtons: NavButtonConfig[]
}

export function NavDialog({
  open,
  onClose,
  activeSection,
  navButtons,
}: NavDialogProps) {
  return (
    <FullScreenDialog
      open={open}
      onClose={onClose}
    >
      <DialogContent
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          {navButtons.map((btn) => (
            <NavButton
              key={btn.id}
              icon={btn.icon}
              label={btn.label}
              sectionId={btn.id}
              active={activeSection === btn.id}
              onClick={() => onClose()}
            />
          ))}
        </Box>
      </DialogContent>
    </FullScreenDialog>
  )
}
