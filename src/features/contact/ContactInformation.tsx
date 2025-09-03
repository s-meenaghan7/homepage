import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { EmailButton } from "../../common/EmailButton"
import { GitHubButton } from "../../common/GitHubButton"
import { LinkedInButton } from "../../common/LinkedInButton"

export function ContactInformation() {
  return (
    <Grid size={{ xs: 12, md: 5 }}>
      <Typography
        variant="h6"
        gutterBottom
      >
        Contact Information
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        fontSize="large"
      >
        <EmailButton />
        <LinkedInButton />
        <GitHubButton />
      </Stack>
    </Grid>
  )
}
