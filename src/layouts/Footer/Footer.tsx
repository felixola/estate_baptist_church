import React from 'react';
import { Box, Typography, Stack, Grid, Link,  Divider } from '@mui/material';
import { routes } from '../../routes/route';
import { NavLink } from 'react-router-dom';
import EBCLogo from '../../assets/svgs/EBC.svg';
import './Footer.css';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer: React.FC = () => {

  return (

    <>

      <Grid container pt='50px' pb='50px'  sx={{ background: '#000000', color: '#FFFFFF', width: '100%',  display:'flex', justifyContent: 'center'}} >
        {/* 1 */}
        <Grid item md={3} xs={12}>

          <Box display='flex' justifyContent= 'left' alignItems= 'center'  px='20px'>

          <img src={EBCLogo} alt="ebclogo" className='top-logo' />

          </Box>
         

          {/* <Typography variant='body1' fontWeight='300'  color='#dee1ec' align='left' px='20px' mt='10px'> 
          In the year 1950, a group of individuals in a small town in the United States
          began to discuss their shared beliefs and desire to all worship together.
           These individuals came fr various backgrounds, but all shared a deep a faith in God 
          </Typography> */}
     
        </Grid>

        {/* 2 */}


        <Grid item md={3} xs={12}>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              gap: 1}} px='20px'>
                <Typography align='left' variant='h6' fontWeight='600'> Quick Links </Typography>
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
                        >
                        
                        <Typography color='#dee1ec' fontWeight='300' align='left' textTransform='capitalize' sx={{ fontSize: '16px', }}>

                          {page.title}  
                        
                        </Typography>

                      </Link>
                  
                    </>

                  ))}
                    
                </Box>

          </Grid>

      {/* 2 */}
      <Grid item md={3} xs={12}>
        
        <Box
          sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'left',
              gap: 2}}  px='20px'>

                <Typography variant='h6' align='left' fontWeight='600'>Locations</Typography>

            <Stack direction='row' spacing={1} >

              <PlaceIcon />

              <Typography variant='body1' align='left' fontWeight='300' color='#dee1ec'>
                  Estate Baptist Church, Ota
              </Typography>

            </Stack>

            <Stack direction='row' spacing={1}>

              <PhoneIcon />

              <Typography variant='body1' align='left' fontWeight='300' color='#dee1ec'>081234567890, 0802345754</Typography>

            </Stack>

           

                      
                      
        </Box>

      </Grid>

      {/* 3 */}
      <Grid item md={3} xs={12}>

         <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              gap: 1}}  px='20px'>

                <Typography variant='h6' align='left' fontWeight='600'>Join Our Social Community</Typography>

           <Stack spacing={3} direction='row'>
            <FacebookRoundedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
           </Stack>


          </Box>

      </Grid>

    </Grid>

    <Divider />
              {/* Copy-right */}
          <Box 
            width='100%' 
            sx={{display: { xs: 'block', md: 'flex'}}} 
            mt='10px'  
            alignItems="center"
            justifyContent='space-between'>

            <Stack direction='row' spacing={0}  justifyContent='center' alignItems='center'>

            <Typography variant='body1' fontSize='25px' color='#000000' fontWeight='300'>
              © 
              </Typography>
              <Typography variant='body1'  fontSize='15px' color='#000000'>
              {new Date().getFullYear()}
              </Typography>
              <Typography variant='body1' color='#000000' fontWeight='700' ml='10px'>
              ESTATE BAPTIST CHURCH
              </Typography>
            </Stack>

            <Stack direction='row'  justifyContent='center' alignItems='center'>
           
              <Typography variant='body1'  fontSize='15px' color='#000000'>
                 All right Reserved
              </Typography>
            </Stack>
          

            
          </Box>
    </>
  )
}

export default Footer