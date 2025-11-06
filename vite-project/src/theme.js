import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "blue",
        },
      },
    },
  },
});

export default theme;
