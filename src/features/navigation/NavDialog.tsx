import CloseIcon from "@mui/icons-material/Close"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import IconButton from "@mui/material/IconButton"
import type { NavButtonConfig } from "./NavBarContainer"
import { NavButton } from "./NavButton"

interface NavDialogProps {
  open: boolean
  onClose: () => void
  navButtons: NavButtonConfig[]
}

export function NavDialog({ open, onClose, navButtons }: NavDialogProps) {
  return (
    <Dialog
      open={open}
      fullScreen
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(2px)",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <CloseIcon />
      </IconButton>

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
              active={false}
              onClick={(e) => {
                onClose()
                btn.onClick(e, btn.id)
              }}
            />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  )
}
