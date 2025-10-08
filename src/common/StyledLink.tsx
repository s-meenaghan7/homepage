import Link from "@mui/material/Link"

interface BaseProps {
  text: string
  underline?: "always" | "none" | "hover"
  fontStyle?: "normal" | "italic"
}

interface StyledHrefLinkProps {
  href: string
  onClick?: never
}

interface StyledOnClickLinkProps {
  onClick: () => void
  href?: never
}

type StyledLinkProps = BaseProps & (StyledHrefLinkProps | StyledOnClickLinkProps)

export function StyledLink({
  text,
  onClick,
  href,
  fontStyle,
  underline,
}: StyledLinkProps) {
  return (
    <Link
      color="inherit"
      underline={underline ? underline : "always"}
      href={href ?? undefined}
      onClick={onClick ?? undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      sx={{
        cursor: "pointer",
        fontStyle: fontStyle ? fontStyle : "italic",
        transition: "color 300ms ease-out",
        "&:hover": {
          color: "#0099ff",
        },
      }}
    >
      {text}
    </Link>
  )
}
