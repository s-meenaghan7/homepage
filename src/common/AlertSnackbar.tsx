import Alert, { type AlertColor } from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"

export interface AlertSnackbarProps {
  show: boolean
  message: string
  onClose: () => void
  severity: AlertColor
}

export function AlertSnackbar({
  show,
  onClose,
  message,
  severity,
}: AlertSnackbarProps) {
  return (
    <Snackbar
      open={show}
      onClose={onClose}
      autoHideDuration={5500}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Alert
        variant="filled"
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
