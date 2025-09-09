import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { EmailButton, GitHubButton, LinkedInButton } from "../../common"
import { navButtonsConfig } from "../navigation"
import { BackToTopButton } from "./BackToTopButton"
import { FooterLink } from "./FooterLink"
import { FooterSection } from "./FooterSection"

export function Footer() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      component="footer"
      sx={{
        pt: 4,
        pb: 2,
        mt: "auto",
        bgcolor: theme.palette.footer.bgColor,
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
            mb: 3,
            pr: 10,
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: "auto",
          }}
        >
          <FooterSection title="Sean Meenaghan">
            <Typography
              mb={2}
              variant="body2"
              color="text.secondary"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
              neque est corporis.
            </Typography>

            <Box>
              <EmailButton />
              <LinkedInButton />
              <GitHubButton />
            </Box>
          </FooterSection>

          <FooterSection title="Quick Links">
            {navButtonsConfig.slice(1).map((link) => (
              <FooterLink
                id={link.id}
                key={link.id}
                label={link.label}
                onClick={link.onClick}
              />
            ))}
          </FooterSection>

          <FooterSection title="Get In Touch">
            <Link
              underline="hover"
              variant="subtitle2"
              href="mailto:seanmeenaghan@gmail.com"
            >
              seanmeenaghan@gmail.com
            </Link>

            <Link
              underline="hover"
              variant="subtitle2"
              href="tel:+13603911345"
            >
              (360) 391-1345
            </Link>
          </FooterSection>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Bottom bar / copyright */}
        <Box
          gap={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={isSmallScreen ? "column" : "row"}
        >
          <Typography
            variant="body2"
            color="text.secondary"
          >
            © {new Date().getFullYear()} Sean Meenaghan. All rights reserved.
          </Typography>

          <BackToTopButton />
        </Box>
      </Container>
    </Box>
  )
}
