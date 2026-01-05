import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Fragment } from "react"
import { ProjectOverview } from "./ProjectOverview"
import projectsData from "./projects.data"

export function Projects() {
  return (
    <Grid
      container
      id="projects"
      component="section"
      flexDirection="column"
      sx={{
        px: { xs: 2, sm: 4, md: 5 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Grid sx={{ py: 2.5, px: { sm: "inherit" } }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
        >
          Featured Projects
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          px={{ sm: 0, md: 6 }}
        >
          A selection of projects I've built, including professional work and personal
          initiatives. Most of my professional projects are private due to company
          ownership, but I've provided detailed write-ups to highlight the challenges,
          solutions, and technologies involved. A few personal projects are publicly
          available on GitHub for direct review.
        </Typography>
      </Grid>

      <Grid
        gap={1}
        display="flex"
        flexDirection="column"
      >
        {projectsData.map((props, i) => {
          return (
            <Fragment key={i}>
              <ProjectOverview {...props} />
              {i + 1 < projectsData.length && <Divider variant="middle" />}
            </Fragment>
          )
        })}
      </Grid>
    </Grid>
  )
}
