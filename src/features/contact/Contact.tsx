import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { ContactForm } from "./ContactForm"
import { ContactInformation } from "./ContactInformation"

export function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        flexGrow: 1,
        px: { xs: 0, sm: 2 },
        py: 9,
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
        sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nam reiciendis
        non ratione porro saepe adipisci voluptatum voluptatem explicabo! Debitis!
      </Typography>

      <Grid
        spacing={{ xs: 6, md: 2 }}
        container
        width="100%"
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <ContactForm />
        <ContactInformation />
      </Grid>
    </Box>
  )
}
