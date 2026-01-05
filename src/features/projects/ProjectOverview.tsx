import PersonIcon from "@mui/icons-material/Person"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { CaseStudyLink, type CaseStudyLinkProps } from "./CaseStudyLink"

export interface ProjectOverviewProps {
  title: string
  techStack: string[]
  description: string
  caseStudyLink?: CaseStudyLinkProps
  context: "personal" | "professional"
}

export function ProjectOverview({
  title,
  context,
  techStack,
  description,
  caseStudyLink,
}: ProjectOverviewProps) {
  return (
    <Grid>
      <Grid
        py={2}
        borderRadius={3}
        px={{ xs: 3, lg: 5 }}
      >
        <Typography
          gap={1}
          variant="h6"
          display="flex"
          alignItems="center"
          justifyContent={{ lg: "left", xs: "center" }}
        >
          {context === "professional" ? <WorkOutlineIcon /> : <PersonIcon />}
          {title}
        </Typography>

        <Typography
          color="text.secondary"
          variant="body2"
          gutterBottom
        >
          {description}
        </Typography>

        {caseStudyLink && <CaseStudyLink {...caseStudyLink} />}

        <Grid
          display="flex"
          flexWrap="wrap"
          gap={1}
          py={1}
          justifyContent={{ xs: "center", md: "left" }}
        >
          {techStack.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              variant="filled"
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
