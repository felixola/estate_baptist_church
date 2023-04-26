import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography : {
        fontFamily: ['Work sans', 'sans-serif'].join(',')
    },
    palette: {
        primary: {
          main: "#5D3891",
        }
      },  
   
});

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bruno+Ace+SC&family=Vina+Sans&display=swap" rel="stylesheet">

// font-family: 'Bebas Neue', cursive;
// font-family: 'Bruno Ace SC', cursive;
// font-family: 'Vina Sans', cursive;

export default theme;