import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CaseStudyLink, type CaseStudyLinkProps } from "./CaseStudyLink"

export interface ProjectOverviewProps {
  title: string
  techStack: string[]
  description: string
  caseStudyLink?: CaseStudyLinkProps
}

export function ProjectOverview({
  title,
  techStack,
  description,
  caseStudyLink,
}: ProjectOverviewProps) {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid>
      <Grid
        py={2}
        px={{ xs: 3, lg: 5 }}
        border="1px solid lightgrey"
        borderRadius={3}
      >
        <Typography
          variant="h6"
          align={isMediumScreen ? "center" : "left"}
        >
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
