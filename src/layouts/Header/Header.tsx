import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/Theme';
import {
  Box,
  Link,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { routes } from '../../routes/route';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/svgs/trace.svg';
import DrawerComponent from '../../components/Interface/Drawer/DrawerComp';
import './Header.css';



const Header: React.FC = () => {

      const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (

      <ThemeProvider theme={theme}>

        <Box sx={{ width: '100%', height: 'auto', background: '#FFFFFF',  zIndex: 3, position: 'sticky', top: '0px',}}>

          <Container maxWidth='xl'>

            <Toolbar disableGutters  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
              {/* Logo */}
              <img src={Logo} alt='logo' className='logo'/>

              {/* <Box width='100%'>
              <Typography align='left' fontWeight='900' sx={{fontSize:'10px'}}> ESTATE BAPTIST   

                  <span style={{color: '#1c79c0'}}> CHURCH </span>
              </Typography>
              </Box> */}

            

              { isMobile ? (
                 <Box sx={{width: '100%', display: 'flex', marginRight: '0px', justifyContent:'end'}}>
                 <DrawerComponent />
                 </Box>
              ) : (
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} ml='auto' px='40px'>
                  

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginLeft: "1rem", }}>
                    {routes.map((page) => (

                      <>
                      
                    <Link
                      key={page.key}
                      component={NavLink}
                      to={page.path}
                      color="black"
                      className='link'
                      underline="none"
                      variant="button"
                      sx={{  marginLeft: "2.5rem",}}>

                      <Typography color='#000000' align='center' textTransform='uppercase' sx={{ fontSize: '15px', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', }}> {page.title}  
                        <span style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>{page.icons}</span>
                        
                      </Typography>
                    </Link>
                    
                    
                    </>

                  ))}
                    
                    
                </Box>

              </Box>
              )}

              

          </Toolbar>

        </Container> 
        
      </Box>

    </ThemeProvider>
  );
}

export default Header





