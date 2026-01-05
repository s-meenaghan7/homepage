import Button from "@mui/material/Button"
import { useState } from "react"
import { HtmlSvg } from "./HtmlSvg"
import { ResumeDialog } from "./ResumeDialog"

export function ViewHtmlCvButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(!open)}
        startIcon={<HtmlSvg />}
        sx={{
          whiteSpace: "nowrap",
          minWidth: 0,
          flexShrink: 1,
        }}
      >
        View HTML CV
      </Button>

      <ResumeDialog
        open={open}
        onClose={() => setOpen(!open)}
      />
    </>
  )
}
