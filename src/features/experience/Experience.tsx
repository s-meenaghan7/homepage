import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import workExperience from "./experience.data"
import { WorkExperience } from "./WorkExperience"

export function Experience() {
  const scrollToIntro = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contact = document.getElementById("contact")
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

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
      <Grid sx={{ py: 2.5, px: { sm: "inherit" } }}>
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
          px={{ sm: 0, md: 6 }}
        >
          Below offers just a glimpse of my contributions in the various roles that I've
          held. For more details about my experience and how I can add value to your
          organization:{" "}
          <Link
            onClick={scrollToIntro}
            sx={{
              cursor: "pointer",
              fontStyle: "italic",
              transition: "color 300ms ease-out",
              "&:hover": {
                color: "#0099ff",
              },
            }}
          >
            download my resume
          </Link>{" "}
          or{" "}
          <Link
            onClick={scrollToContact}
            sx={{
              cursor: "pointer",
              fontStyle: "italic",
              transition: "color 300ms ease-out",
              "&:hover": {
                color: "#0099ff",
              },
            }}
          >
            get in touch
          </Link>
          .
        </Typography>
      </Grid>

      <Grid justifyItems="center">
        <Grid
          display="flex"
          flexDirection="column"
          gap={3}
        >
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
