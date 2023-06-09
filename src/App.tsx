import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Divider } from '@mui/material';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { routes as navRoutes } from './routes/route';
import theme from './components/Theme';
import Header from './layouts/Header/Header';
import SubHeader from './layouts/SubHeader/SubHeader';
import Footer from './layouts/Footer/Footer';


function App() {
  return (
   <ThemeProvider theme={theme}>

      <CssBaseline />

      <Box display='flex' flexDirection='column' height='100%'>

        <Router>
          
          <SubHeader />

          <Divider />

          <Header />

          <Routes>

            {navRoutes.map ((route: any) => (

             <Route
             key={route.key}
             path={route.path}
             element={<route.component />}
           />

            ))}

          </Routes>

          <Box>
            
          <Footer/>

          </Box>

        </Router>

      </Box>
      
   </ThemeProvider>
  );
}

export default App;
