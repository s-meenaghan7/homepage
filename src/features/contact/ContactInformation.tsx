import Email from "@mui/icons-material/Email"
import GitHub from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { InfoBadge } from "../../common"
import { EmailButton } from "../../common/EmailButton"
import { GitHubButton } from "../../common/GitHubButton"
import { LinkedInButton } from "../../common/LinkedInButton"

export function ContactInformation() {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid justifyItems="center">
      <Typography
        variant="h6"
        gutterBottom
      >
        Contact Information
      </Typography>
      <Stack
        direction={{ xs: "row", sm: "row", md: "column" }}
        spacing={2}
        fontSize="large"
      >
        {isMediumScreen ? (
          <>
            <EmailButton />
            <LinkedInButton />
            <GitHubButton />
          </>
        ) : (
          <>
            <InfoBadge
              title="Email"
              icon={<Email />}
              value="seanmeenaghan@gmail.com"
              href="mailto:seanmeenaghan@email.com"
            />
            <InfoBadge
              title="LinkedIn"
              icon={<LinkedIn />}
              value="linkedin.com/in/seanmeenaghan/"
              href="https://www.linkedin.com/in/seanmeenaghan/"
            />
            <InfoBadge
              title="GitHub"
              icon={<GitHub />}
              value="github.com/s-meenaghan7"
              href="https://github.com/s-meenaghan7"
            />
          </>
        )}
      </Stack>
    </Grid>
  )
}
