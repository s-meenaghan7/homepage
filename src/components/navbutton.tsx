import type { ButtonProps } from "@mui/material/Button"
import Button from "@mui/material/Button"
import type React from "react"

interface NavButtonProps extends ButtonProps {
  sectionId: string
  label: string
  active: boolean
}

export default function NavButton({ sectionId, label, active }: NavButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Button
      disableRipple
      onClick={handleClick}
      href=""
      sx={{
        position: "relative",
        overflow: "visible",
        fontWeight: active ? "bold" : "normal",
        transition: "font-weight 0.1s ease-in-out",
      }}
    >
      {label}
    </Button>
  )
}
