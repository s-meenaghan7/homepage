import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
// import { ContactForm } from "./ContactForm"
import { ContactInformation } from "./ContactInformation"

export function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        flexGrow: 1,
        px: { xs: 0, sm: 2 },
        pt: { xs: 7, sm: 6, md: 9 },
        backgroundColor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
      >
        Connect with me
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: "700px", mx: "auto", mb: 6 }}
      >
        Interested in working together or have a question? Send a message and I'll get
        back to you.
      </Typography>

      <Grid
        spacing={{ xs: 6, md: 2 }}
        container
        width="100%"
        display="flex"
        flexDirection="column"
        // TODO: replace line 45 with 47 when adding the ContactForm back!
        // flexDirection={{ xs: "column-reverse", md: "row" }}
        pb={5}
      >
        {/* <ContactForm /> */}
        <ContactInformation />
      </Grid>
    </Box>
  )
}
