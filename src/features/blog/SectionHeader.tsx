import Typography from "@mui/material/Typography"
import { MarkdownContent } from "./markdown"

interface SectionHeaderProps {
  children: React.ReactNode
  variant?: "h1" | "h2" | "h3"
}

export function SectionHeader({ children, variant }: SectionHeaderProps) {
  const id = MarkdownContent.slugify(children?.toString() || "")

  if (variant === "h1") {
    return (
      <Typography
        variant="h4"
        gutterBottom
        id={id}
      >
        {children}
      </Typography>
    )
  }

  if (variant === "h2") {
    return (
      <Typography
        variant="h5"
        gutterBottom
        fontWeight="bold"
        pt={3}
        id={id}
      >
        {children}
      </Typography>
    )
  }

  return (
    <Typography
      variant="h6"
      gutterBottom
      fontWeight="bold"
      pt={2}
      id={id}
    >
      {children}
    </Typography>
  )
}
