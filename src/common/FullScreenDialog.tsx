import CloseIcon from "@mui/icons-material/Close"
import Dialog from "@mui/material/Dialog"
import type DialogContent from "@mui/material/DialogContent"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "@mui/material/styles"

interface FullScreenDialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactElement<typeof DialogContent>
}

export function FullScreenDialog({ open, onClose, children }: FullScreenDialogProps) {
  const theme = useTheme()

  return (
    <Dialog
      open={open}
      fullScreen
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(0,0,0,0.6)"
                : "rgba(255,255,255,0.8)",
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

      {children}
    </Dialog>
  )
}
