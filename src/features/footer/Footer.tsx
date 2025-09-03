import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"

export function Footer() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: "auto",
        // TODO: backgroundColor based on theme. Slightly darker on light mode; slightly lighter on dark mode.
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          wrap="nowrap"
          justifyContent="space-between"
          flexDirection={isSmallScreen ? "column" : "row"}
          sx={{
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: "auto",
          }}
        >
          {/* Left: About / branding / social icons */}
          <Grid>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              Sean Meenaghan
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
              neque est corporis.
            </Typography>

            {/* TODO: social icons below, in a row */}
          </Grid>

          {/*  Middle: quick links */}
          <Grid>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              Quick Links
            </Typography>
            {/* TODO: list of link components. Possibly reuse the config.tsx from navigation? Have FooterLink components to display the icon with the Label. But these are Links, not Buttons! */}
          </Grid>

          {/* Right: Get In Touch */}
          <Grid>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              Get In Touch
            </Typography>
            {/* TODO: email link and "Send me a message!" to go back to Contact section */}
          </Grid>
        </Grid>

        {/* Bottom bar / copyright */}
        <Box my={4}>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            © {new Date().getFullYear()} Sean Meenaghan. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
