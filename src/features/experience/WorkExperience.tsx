import type { AvatarProps } from "@mui/material/Avatar"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"

export interface WorkExperienceProps {
  title: string
  dates: string
  company: string
  logoProps: AvatarProps
  description: string[]
}

export function WorkExperience({
  title,
  dates,
  company,
  logoProps,
  description,
}: WorkExperienceProps) {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid>
      <Grid display="flex">
        <Box
          width={50}
          height={50}
          display="flex"
          sx={{ pt: 0.5, mr: 0.5 }}
          justifyContent="center"
        >
          <Avatar {...logoProps} />
        </Box>

        <Grid>
          {isMediumScreen ? (
            <>
              <Typography>{title}</Typography>
              <Typography>{company}</Typography>
            </>
          ) : (
            <Typography>
              {title} | {company}
            </Typography>
          )}
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {dates}
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          {description.map((item, i) => (
            <ListItem
              key={i}
              sx={{ display: "list-item", py: 0 }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}
