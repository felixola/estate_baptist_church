import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography, Badge } from '@mui/material';
import theme from '../../components/Theme';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import NotificationsIcon from '@mui/icons-material/Notifications';
  

const SubHeader: React.FC = () => {

  return (

    <ThemeProvider theme={theme}>

         <Box sx={{ width: '100%', padding: {xs: '20px', md: '20px'},  background: '#FFFFFF', display: 'flex', alignItems: 'center'}}>

                {/* Email */}
            <Stack direction='row' spacing={0.5} px='12px'>

                <MailOutlineIcon sx={{color: '#3d6cb9', fontSize: {xs: '20px', md: '22px'}}} fontSize='small' /> 

                <Typography 
                sx={{ fontSize: {xs: '12px', md: '15px'}}}
                variant='body1' fontWeight='500' color='#777' fontSize='14px'> ebcinfo@gmail.com </Typography>

            </Stack>

                {/* Phone number */}
            <Stack direction='row' spacing={0.5} ml='15px'>

              <PhoneIcon sx={{color: '#3d6cb9', fontSize: {xs: '20px', md: '22px'}}}/>

              <Typography
                 sx={{ fontSize: {xs: '12px',  md: '15px'}}}
                 variant='body1' color='#777' fontWeight='500' fontSize='14px'> 
                 +234080234567890 
              </Typography>

            </Stack>
            

                {/* Notification */}
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}} ml='auto'>

              <Badge variant="dot" color='error' overlap="circular" badgeContent=" "  aria-label="show 17 new notifications">

              <NotificationsIcon sx={{color: '#3d6cb9', fontSize: {xs: '20px', md: '22px'}}} fontSize='small'/> 

              </Badge>

            </Box>
    
        </Box>

    </ThemeProvider>
    
  );
}

export default SubHeader