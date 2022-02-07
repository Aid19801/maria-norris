import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3D1255", // purple
    },
    secondary: {
      main: "#9775AA", // light/violet
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
