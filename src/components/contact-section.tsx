import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ContactForm from "./contact-form"
import ContactInformation from "./contact-information"

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        flexGrow: 1,
        p: 4,
        backgroundColor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Typography variant="h3" gutterBottom align="center">
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

      <Grid container spacing={6} sx={{ width: "100%" }}>
        <ContactForm />
        <ContactInformation />
      </Grid>
    </Box>
  )
}
