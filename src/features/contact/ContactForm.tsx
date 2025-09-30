import SendRoundedIcon from "@mui/icons-material/SendRounded"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { FormField } from "./FormField"

export function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // handle form submission logic here
  }

  return (
    <Grid width={{ sm: "100%", md: "55%" }}>
      <Grid
        display="flex"
        flexDirection="column"
        sx={{
          padding: 3,
          borderRadius: 3,
          border: "1px solid lightgrey",
        }}
      >
        <Typography
          alignSelf={{ xs: "center", sm: "center", md: "flex-start" }}
          sx={{
            marginBottom: 4,
          }}
        >
          Send me a message!
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            gap: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={3}>
            <FormField
              name="Name"
              required
              fullWidth
              size="small"
              placeholder="Your name"
            />
            <FormField
              required
              fullWidth
              name="Email"
              size="small"
              type="email"
              placeholder="your.email@email.com"
            />
            <FormField
              required
              fullWidth
              size="small"
              name="Subject"
              placeholder="What are you reaching out about?"
            />
            <FormField
              rows={4}
              required
              fullWidth
              multiline
              size="small"
              name="Message"
              placeholder="Tell me more..."
            />
            <Button
              size="large"
              fullWidth
              type="submit"
              variant="contained"
              endIcon={<SendRoundedIcon />}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  )
}
