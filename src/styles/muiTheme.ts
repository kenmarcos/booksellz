import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    background: {
      default: "#F7F6F3",
      paper: "#FFFFFF",
    },
    common: {
      black: "#0E0E0F",
    },
    text: {
      primary: "#666665",
      secondary: "#9E9EA7",
    },
    primary: {
      main: "#E7C52B",
      dark: "#BAA028",
      contrastText: "#FCFCFA",
    },
    secondary: {
      main: "#FCFCFA",
      dark: "#E6DDB4",
      contrastText: "#E7C52B",
    },
    success: {
      main: "#168821",
    },
    error: {
      main: "#DF1545",
    },
  },

  typography: {
    fontFamily: "inter, sans-serif",
    h1: {
      fontSize: "2.375rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2.125rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    button: {
      fontWeight: "bold",
    },
  },
});

export default muiTheme;
