import Email from "@mui/icons-material/Email"
import GitHub from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import ContactButton from "./ContactButton"

const contactButtons = [
  {
    href: "mailto:seanmeenaghan@email.com",
    title: "Email me",
    icon: <Email fontSize="large" />,
  },
  {
    href: "https://linkedin.com/in/seanmeenaghan",
    title: "LinkedIn",
    icon: <LinkedIn fontSize="large" />,
  },
  {
    href: "https://github.com/s-meenaghan7",
    title: "GitHub",
    icon: <GitHub fontSize="large" />,
  },
]

export default function ContactInformation() {
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
