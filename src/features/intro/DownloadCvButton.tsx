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
      sx={{
        whiteSpace: "nowrap",
        minWidth: 0,
        flexShrink: 1,
      }}
    >
      Download CV
    </Button>
  )
}
