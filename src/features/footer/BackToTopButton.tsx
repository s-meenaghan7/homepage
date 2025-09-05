import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

export function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      onClick={handleClick}
      endIcon={
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            transition: "transform 0.3s ease",
            ".MuiButton-root:hover &": {
              transform: "translateY(-4px)", // move up on hover
            },
          }}
        >
          <ArrowUpwardRoundedIcon />
        </Box>
      }
    >
      Back to top
    </Button>
  )
}
