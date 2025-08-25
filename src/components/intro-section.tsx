import Avatar from "@mui/material/Avatar"
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

  return (
    <Box
      component="section"
      id="intro"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        px: 4,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction={isSmallScreen ? "column-reverse" : "row"}
      >
        {/* LEFT: Content */}
        <Grid sx={{ maxWidth: 600 }}>
          <Typography variant="h2" gutterBottom>
            Sean Meenaghan
          </Typography>

          <Typography variant="h5" gutterBottom>
            Software Engineer | Cloud & Backend-focused
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum
            consequatur iusto fugit aliquam, exercitationem a recusandae ipsum
            cupiditate amet corrupti beatae modi tenetur perspiciatis autem eius veniam.
            Nisi, id.
          </Typography>

          {/* Tech summary */}
          <Box>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              <Chip size="small" variant="outlined" label="TypeScript" />
              <Chip size="small" variant="outlined" label="Node.js" />
              <Chip size="small" variant="outlined" label="Python" />
              <Chip size="small" variant="outlined" label="React" />
              <Chip size="small" variant="outlined" label="Material UI" />
              <Chip size="small" variant="outlined" label="OOP / OOD" />
              <Chip size="small" variant="outlined" label="Git VCS" />
              <Chip size="small" variant="outlined" label="GitHub Actions" />
              <Chip size="small" variant="outlined" label="DataDog" />
              <Chip size="small" variant="outlined" label="Splunk" />
              <Chip size="small" variant="outlined" label="Atlassian Administration" />
            </Stack>
          </Box>
        </Grid>

        {/* RIGHT: Picture */}
        <Grid sx={{ textAlign: "center" }}>
          {isSmallScreen ? (
            <Avatar
              src="/assets/temp_pro_pic.jpg"
              alt="Sean Meenaghan"
              sx={{ width: 150, height: 150, margin: "0 auto" }}
            />
          ) : (
            <Box
              component="img"
              src="/assets/temp_pro_pic.jpg"
              alt="Sean Meenaghan"
              sx={{
                width: "100%",
                maxWidth: 400,
                borderRadius: 4,
                boxShadow: 3,
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  )
}
