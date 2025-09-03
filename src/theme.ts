import { createTheme } from "@mui/material/styles"

// module augmentation to extend ThemeOptions in createTheme
declare module "@mui/material/styles" {
  interface Palette {
    footer: {
      bgColor: string
    }
  }
  // allow configuration using `createTheme()`
  interface PaletteOptions {
    footer?: {
      bgColor?: string
    }
  }
}

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#f0f0f0",
        },
        background: {
          default: "#1e1e1e",
        },
        text: {
          primary: "#f5f5f5",
          secondary: "rgba(255,255,255,0.7)",
        },
        footer: {
          bgColor: "#454545",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: "#333333",
        },
        secondary: {
          main: "#555555",
        },
        background: {
          default: "#f7f7f7",
          paper: "#f0f0f0",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "rgba(0,0,0,0.6)",
        },
        footer: {
          bgColor: "#e0e0e0",
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? "#e0e0e0" : "#454545",
        }),
      },
    },
  },
})

export default theme
