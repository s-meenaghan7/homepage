import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined"
import Button from "@mui/material/Button"

export function DownloadCvButton() {
  return (
    <Button
      href="/resume.pdf"
      variant="contained"
      id="download-cv-btn"
      download="Sean Meenaghan - Resume"
      startIcon={<TaskOutlinedIcon />}
    >
      Download CV
    </Button>
  )
}
