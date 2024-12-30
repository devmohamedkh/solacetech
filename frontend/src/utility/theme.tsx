import { createTheme } from '@mui/material/styles';

export const MUITheme = createTheme({
  palette: {
    background: {
      default: "rgba(250, 250, 250, 1)"
    },
    primary: {
      main: "#003fad",
    },
    text: {
      primary: "rgba(5, 29, 73, 1)",
      secondary: 'rgba(115, 119, 145, 1)',
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
  },
});