import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function IntroSection() {
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
        <Grid sx={{ maxWidth: 600 }}>
          <Typography
            variant={isSmallScreen ? "h3" : "h2"}
            gutterBottom
            align={isMediumScreen ? "center" : "left"}
          >
            Sean Meenaghan
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            align={isMediumScreen ? "center" : "left"}
          >
            Software Engineer | Cloud & Backend-focused
          </Typography>

          <Typography
            variant="body1"
            sx={{ maxWidth: 600, mb: 4 }}
            align={isMediumScreen ? "center" : "left"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum
            consequatur iusto fugit aliquam, exercitationem a recusandae ipsum
            cupiditate amet corrupti beatae modi tenetur perspiciatis autem eius veniam.
            Nisi, id.
          </Typography>

          {/* Tech summary */}
          <Box>
            <Stack
              justifyContent={isMediumScreen ? "center" : "left"}
              direction="row"
              flexWrap="wrap"
              gap={1}
            >
              <Chip
                size="small"
                variant="outlined"
                label="TypeScript"
              />
              <Chip
                size="small"
                variant="outlined"
                label="Node.js"
              />
              <Chip
                size="small"
                variant="outlined"
                label="Python"
              />
              <Chip
                size="small"
                variant="outlined"
                label="React"
              />
              <Chip
                size="small"
                variant="outlined"
                label="Material UI"
              />
              <Chip
                size="small"
                variant="outlined"
                label="OOP / OOD"
              />
              <Chip
                size="small"
                variant="outlined"
                label="Git VCS"
              />
              <Chip
                size="small"
                variant="outlined"
                label="GitHub Actions"
              />
              <Chip
                size="small"
                variant="outlined"
                label="DataDog"
              />
              <Chip
                size="small"
                variant="outlined"
                label="Splunk"
              />
              <Chip
                size="small"
                variant="outlined"
                label="Atlassian Administration"
              />
            </Stack>
          </Box>
        </Grid>

        {/* RIGHT: Picture */}
        <Grid
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="/assets/temp_pro_pic.jpg"
            alt="Picture of Sean Meenaghan"
            sx={{
              width: { xs: "70%", lg: "100%" },
              height: "auto",
              maxWidth: 400,
              borderRadius: 4,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
