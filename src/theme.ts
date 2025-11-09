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
          paper: "#2c2c2c",
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
          paper: "#e6e6e6",
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

    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        // block code wrapper
        pre: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          overflowX: "auto",
          border: `1px solid ${theme.palette.divider}`,
          // ensure monospace child code inherits and displays properly
          "& code": {
            display: "block",
            whiteSpace: "pre",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace",
            fontSize: "0.9rem",
            color: "inherit",
            background: "transparent",
            padding: 0,
          },
        },

        // inline code styling
        code: {
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace",
          fontSize: "0.9rem",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.action.hover,
          padding: "2px 6px",
        },
      }),
    },
  },
})

export default theme
