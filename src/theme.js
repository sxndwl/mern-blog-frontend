import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: [
    "none", // 0
    "0px 1px 3px 0px rgba(0,0,0,0.2)", // 1
    "0px 1px 5px 0px rgba(0,0,0,0.3)", // 2
    // Другие уровни элевации, если необходимо
  ],
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});

