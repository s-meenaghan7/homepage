import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import workExperience from "./experience.data"
import { WorkExperience } from "./WorkExperience"

export function Experience() {
  return (
    <Grid
      container
      id="experience"
      component="section"
      flexDirection="column"
      sx={{
        px: { xs: 2, sm: 4, md: 5 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Grid sx={{ p: 2.5 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
        >
          Work Experience
        </Typography>

        <Typography
          variant="subtitle2"
          align="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque reprehenderit
          fugit aliquam iste numquam magni.
        </Typography>
      </Grid>

      <Grid justifyItems="center">
        <Grid>
          {workExperience.map((props, i) => (
            <WorkExperience
              key={i}
              {...props}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
