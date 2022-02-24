import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#bf05a6", // pink
    },
    secondary: {
      main: "#f49ce8", // light/violet
    },
  },
  typography: {
    fontFamily: "Bebas Neue",
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            red: "#000",
            color: "#fff",
          },
        },
      },
    },
  },
});
