import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router"
import { StyledLink } from "../../common"

export interface CaseStudyLinkProps {
  slug: string
  text: string
}

export function CaseStudyLink({ slug, text }: CaseStudyLinkProps) {
  const navigate = useNavigate()

  return (
    <>
      <Typography
        color="text.primary"
        variant="body2"
        gutterBottom
      >
        <StyledLink
          onClick={() => navigate(`/projects/${slug}`)}
          text={text}
        />
      </Typography>
    </>
  )
}
