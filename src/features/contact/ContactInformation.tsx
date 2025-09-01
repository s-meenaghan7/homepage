import Email from "@mui/icons-material/Email"
import GitHub from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { ContactButton } from "../../common/ContactButton"

const contactButtons = [
  {
    title: "Email me",
    icon: <Email fontSize="large" />,
    href: "mailto:seanmeenaghan@email.com",
  },
  {
    title: "LinkedIn",
    icon: <LinkedIn fontSize="large" />,
    href: "https://linkedin.com/in/seanmeenaghan",
  },
  {
    title: "GitHub",
    icon: <GitHub fontSize="large" />,
    href: "https://github.com/s-meenaghan7",
  },
]

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
      >
        {contactButtons.map((btn) => (
          <ContactButton
            key={btn.title}
            href={btn.href}
            title={btn.title}
            icon={btn.icon}
          />
        ))}
      </Stack>
    </Grid>
  )
}
