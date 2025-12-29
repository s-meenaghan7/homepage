import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { DownloadCvButton } from "./DownloadCvButton"
import { TechSummary } from "./TechSummary"
import { ViewHtmlCvButton } from "./ViewHtmlCvButton"

export function Intro() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box
      component="section"
      id="intro"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 5 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyItems="center"
        justifyContent="center"
        direction={{ xs: "column-reverse", lg: "row" }}
      >
        {/* LEFT: Content */}
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", maxWidth: 600 }}
        >
          <Box
            display="flex"
            flexDirection="column"
          >
            <Typography
              gutterBottom
              variant={isSmallScreen ? "h3" : "h2"}
              align={isMediumScreen ? "center" : "left"}
            >
              Sean Meenaghan
            </Typography>

            <Typography
              pb={1}
              variant="h5"
              gutterBottom
              align={isMediumScreen ? "center" : "left"}
            >
              Software Engineer | Cloud & Backend-focused
            </Typography>

            <Typography
              variant="body1"
              sx={{ maxWidth: 600 }}
              align={isMediumScreen ? "center" : "left"}
            >
              I'm a software engineer focused on building reliable backend systems and
              cloud-native applications. I started my career building automation-heavy
              systems, which taught me how to design software that's reliable and
              repeatable. Today, I'm channeling that experience into building
              cloud-based applications on AWS with an emphasis on clean design and
              long-term maintainability.
            </Typography>
          </Box>

          <Box
            gap={5}
            width="100%"
            display="flex"
            justifyContent={isMediumScreen ? "center" : "left"}
          >
            <DownloadCvButton />
            <ViewHtmlCvButton />
          </Box>

          <TechSummary />
        </Grid>

        {/* RIGHT: Picture */}
        {/*
          TODO:
          - take a new picture of present-day Sean Meenaghan
          - add pic to this repository
          - display picture by uncommenting the below Grid component
        */}
        {/* <Grid
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="TODO"
            alt="Picture of Sean Meenaghan"
            sx={{
              width: { xs: "70%", lg: "100%" },
              height: "auto",
              maxWidth: 400,
              borderRadius: 4,
              boxShadow: 3,
            }}
          />
        </Grid> */}
      </Grid>
    </Box>
  )
}
