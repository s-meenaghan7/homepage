import SendRoundedIcon from "@mui/icons-material/SendRounded"
import TaskAltIcon from "@mui/icons-material/TaskAlt"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import type { ContactFormState } from "./ContactForm"

interface SubmitButtonProps {
  state: ContactFormState
}

export function SubmitButton({ state }: SubmitButtonProps) {
  if (state === "submitting") {
    return (
      <Button
        disabled
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        <CircularProgress size={25} />
      </Button>
    )
  }

  if (state === "success") {
    return (
      <Button
        disabled
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        endIcon={<TaskAltIcon />}
        sx={{
          "&.Mui-disabled": {
            bgcolor: "#0a0",
            color: "white",
            opacity: 1,
            cursor: "not-allowed",
          },
        }}
      >
        Message sent!
      </Button>
    )
  }

  // idle and error states:
  return (
    <Button
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      endIcon={<SendRoundedIcon />}
    >
      Send Message
    </Button>
  )
}
