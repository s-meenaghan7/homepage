import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined"
import Button from "@mui/material/Button"

export function DownloadCvButton() {
  return (
    <Button
      id="download-cv-btn"
      variant="contained"
      startIcon={<TaskOutlinedIcon />}
    >
      Download CV
    </Button>
  )
}
