import React from 'react';
import { Avatar, Typography, Grid, Box, Stack,  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import './CardComponent.css';


const CardComponent: React.FC = () => {

  return (

    <ThemeProvider theme={theme} >

      <Grid container sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>

        {/* Pastor */}
        <Grid item md={4} xs={12} display='flex' alignItems='center' justifyContent='center'>

          <Box maxWidth='350px'
           height='400px' 
           display='flex' 
           alignItems='center' 
           justifyContent='center' 
           sx={{ border: '1px solid #EEEEEE', borderRadius: '15px', textAlign: 'center', dropShadow:'0px 2px 13px -5px #000000' }}>

            <Stack direction='column' spacing={3} display='flex' alignItems='center' justifyContent='center' width='100%'>


              <Avatar
                alt="Remy Sharp"
                src={image1}
                sx={{ width: 80, height: 80 }}
              />

              <Typography  align='center' variant='h5' color=' #000000' fontWeight='600'>Rev. M.O Akinola</Typography>
              <Typography align='center' mt='0 !important' color='#3d6cb9' fontWeight='400'>Pastor</Typography>
              <blockquote>
                It is not the critic who counts; not the man  who points out how the strong man stumbles, or where the doer of deeds
              </blockquote>

            </Stack>

          </Box>

        </Grid>

        {/* Our mission */}
        <Grid item md={4} xs={12} display='flex' alignItems='center' justifyContent='center'>

          <Box maxWidth='350px' height='400px' display='flex' alignItems='center' justifyContent='center' sx={{ border: '1px solid #EEEEEE', borderRadius: '15px', textAlign: 'center' }}>

            <Stack direction='column' spacing={3} display='flex' alignItems='center' justifyContent='center' width='100%'>

              <Avatar
                alt="Remy Sharp"
                src={image2}
                sx={{ width: 80, height: 80 }}
              />

              <Typography align='center' variant='h5' color=' #000000' fontWeight='600'>Mr Femi Okunade</Typography>
              <Typography align='center' mt='0 !important' color='#3d6cb9' fontWeight='400'>Secretary</Typography>
              <blockquote>
                It is not the critic who counts; not the man  who points out how the strong man stumbles, or where the doer of deeds
              </blockquote>


            </Stack>


          </Box>

        </Grid>

        {/* Our Values */}
        <Grid item md={4} xs={12} display='flex' alignItems='center' justifyContent='center'>

          <Box maxWidth='350px' height='400px' display='flex' alignItems='center' justifyContent='center' sx={{ border: '1px solid #EEEEEE', borderRadius: '15px', textAlign: 'center' }}>

            <Stack direction='column' spacing={3} display='flex' alignItems='center' justifyContent='center' width='100%'>


              <Avatar
                alt="Remy Sharp"
                src={image3}
                sx={{ width: 80, height: 80 }}
              />

              <Typography align='center' variant='h5' color=' #000000' fontWeight='600'> Mr Bamikole Oluwafemi</Typography>
              <Typography align='center' mt='0 !important' color='#3d6cb9' fontWeight='400'>Financial Secretary</Typography>
              <blockquote>
             
                It is not the critic who counts; not the man  who points out how the strong man stumbles, or where the doer of deeds
              </blockquote>


            </Stack>




          </Box>

        </Grid>

      </Grid>

    </ThemeProvider>
  )
}

export default CardComponent;