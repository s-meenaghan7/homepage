import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import { useLocation, useNavigate } from "react-router"
import { scrollToSection } from "../../common"

interface FooterLinkProps {
  id: string
  label: string
}

export function FooterLink({ id, label }: FooterLinkProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    // If already on current page, scroll to the top of section
    if (location.pathname === "/") {
      scrollToSection(id)
    }
    navigate(`/#${id}`)
  }

  return (
    <Box>
      <Link
        underline="hover"
        variant="subtitle2"
        alignItems="center"
        onClick={handleClick}
        sx={{ cursor: "pointer", my: 0.5 }}
      >
        {label}
      </Link>
    </Box>
  )
}
