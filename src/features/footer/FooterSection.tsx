import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

interface FooterSectionProps {
  title: string
  children: React.ReactNode
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <Grid
      maxWidth="400px"
      minWidth="100px"
    >
      <Typography
        gutterBottom
        variant="subtitle1"
      >
        {title}
      </Typography>
      {children}
    </Grid>
  )
}
