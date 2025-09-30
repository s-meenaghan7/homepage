import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

interface InfoBadgeProps {
  icon: React.ReactNode
  href?: string
  title: string
  value: string
}

export function InfoBadge({ icon, href, title, value }: InfoBadgeProps) {
  return (
    <Box
      p={1}
      display="flex"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2.5,
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[700],
        }}
      >
        {icon}
      </Box>
      <Box px={1}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography
          component={href ? "a" : "p"}
          target="_blank"
          referrerPolicy="no-referrer"
          color="text.secondary"
          variant="subtitle2"
          href={href ? href : undefined}
          sx={{
            cursor: href ? "pointer" : "arrow",
            textDecoration: "none",
          }}
        >
          {value}
          {href ? <OpenInNewIcon sx={{ ml: 0.6, height: 16, width: 16 }} /> : null}
        </Typography>
      </Box>
    </Box>
  )
}
