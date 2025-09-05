import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import type { NavButtonConfig } from "../navigation"

type FooterLinkProps = Pick<NavButtonConfig, "id" | "label" | "onClick">

export function FooterLink({ id, label, onClick }: FooterLinkProps) {
  return (
    <Box>
      <Link
        underline="hover"
        variant="subtitle2"
        alignItems="center"
        onClick={(e) => onClick(e, id)}
        sx={{ cursor: "pointer", my: 0.5 }}
      >
        {label}
      </Link>
    </Box>
  )
}
