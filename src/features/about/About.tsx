import LocationPinIcon from "@mui/icons-material/LocationPin"
import SchoolIcon from "@mui/icons-material/School"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { InfoBadge } from "./InfoBadge"

export function About() {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid
      id="about"
      container
      component="section"
      flexDirection="column"
      sx={{
        px: { xs: 2, sm: 4, md: 5 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Grid
        display="flex"
        justifyContent="space-around"
        flexDirection={isMediumScreen ? "column" : "row"}
      >
        <Box maxWidth={isMediumScreen ? "100%" : "60%"}>
          <Typography
            variant="h4"
            gutterBottom
            align={isMediumScreen ? "center" : "left"}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias
            debitis delectus est vel officia ipsa voluptatem vero, ab qui in consequatur
            eius quam eaque tempora doloremque tenetur dicta rerum consequuntur eum.
            Fugiat itaque fuga unde placeat architecto, aspernatur accusantium quos,
            cumque nisi commodi quia incidunt quas dignissimos, laborum maiores.
          </Typography>

          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere
            sapiente hic repellat voluptas, repellendus fugit tempora aliquam amet
            voluptatibus non dolorem eaque est saepe assumenda. Nemo voluptates iure vel
            illo eveniet odit, atque quaerat ex perspiciatis, magni sit tempore velit
            explicabo rerum? Sed temporibus laudantium qui eius dicta alias?
            reprehenderit deserunt rem.
          </Typography>
        </Box>
        <Box
          pt={5}
          justifyItems={isMediumScreen ? "center" : undefined}
        >
          <Typography variant="h6">Personal Information</Typography>
          <Box>
            <InfoBadge
              icon={<SchoolIcon />}
              title="Education"
              value="BS Software Development"
            />
            <InfoBadge
              icon={<LocationPinIcon />}
              title="Location"
              value="Lake Stevens, WA"
              href="https://maps.app.goo.gl/C9kELd4w4ABvPygZA"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
