import { createTheme, Theme } from '@mui/material/styles';

const desktopTheme: Theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Matteo",
      textAlign: "left",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "20px",
      color: "#000000",
    },
    h2: {
      fontFamily: "Matteo",
      textAlign: "left",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "48px",
      color: "#000000",
      padding: "20px"
    },
    body1: {
      fontFamily: "Matteo",
      textAlign: "left",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "150%",
      letterSpacing: "0.3px",
      color: "#292929",
    },
    body2: {
      fontFamily: "Matteo",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: "16px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      marginBottom: 1.5,
    },
  },
});

const mobileTheme: Theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Matteo",
      textAlign: "left",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "18px",
      color: "#000000",
    },
    h2: {
      fontFamily: "Matteo",
      textAlign: "left",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
      color: "#000000",
      padding: "20px"
    },
    body1: {
      fontFamily: "Matteo",
      textAlign: "left",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "125%",
      letterSpacing: "0.3px",
      color: "#292929",
    },
    body2: {
      fontFamily: "Matteo",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "11px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      marginBottom: 1.5,
    },
  },
});

export { desktopTheme, mobileTheme };
