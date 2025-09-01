import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

interface ContactButtonProps {
  title: string
  href: string
  icon: React.ReactNode
}

export function ContactButton({ title, href, icon }: ContactButtonProps) {
  return (
    <Tooltip title={title}>
      <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "text.primary" }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  )
}
