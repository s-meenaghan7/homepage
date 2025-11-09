import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import { useNavigate } from "react-router"

interface FooterLinkProps {
  id: string
  label: string
}

export function FooterLink({ id, label }: FooterLinkProps) {
  const navigate = useNavigate()

  return (
    <Box>
      <Link
        underline="hover"
        variant="subtitle2"
        alignItems="center"
        onClick={() => navigate(`/#${id}`)}
        sx={{ cursor: "pointer", my: 0.5 }}
      >
        {label}
      </Link>
    </Box>
  )
}
