import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#555555",
    },
    background: {
      default: "#f4f6f8", // Light gray background
      paper: "#f0f0f0", // slightly more gray
    },
    text: {
      primary: "#333333", // Dark gray text
      secondary: "#555555", // Lighter gray text
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
})

export default theme
