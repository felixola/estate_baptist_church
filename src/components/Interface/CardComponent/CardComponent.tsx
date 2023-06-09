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

      <Grid container sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }} pt='40px' pb='40px'>

        {/* Pastor */}
        <Grid item md={4} xs={4} display='flex' alignItems='center' justifyContent='center'>

          <Box maxWidth='350px'
           height='400px' 
           mr='20px'
           display='flex' 
           alignItems='center' 
           justifyContent='center' 
           sx={{   textAlign: 'center', boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' }}>

            <Stack direction='column' spacing={3} display='flex' alignItems='center' justifyContent='center' width='100%'>


              <Avatar
                alt="Remy Sharp"
                src={image1}
                sx={{ width: 80, height: 80 }}
              />

              <Typography  align='center' variant='h5' color=' #000000' fontWeight='800'>REV. M.O AKINOLA</Typography>
              <Typography align='center' mt='0 !important' color='#3d6cb9' fontWeight='500'>PASTOR</Typography>
              <blockquote>
                It is not the critic who counts; not the man  who points out how the strong man stumbles, or where the doer of deeds
              </blockquote>

            </Stack>

          </Box>

        </Grid>

        {/* Our mission */}
        <Grid item md={4} xs={4} display='flex' alignItems='center' justifyContent='center'>

          <Box mr='20px'  maxWidth='350px' height='400px' display='flex' alignItems='center' justifyContent='center' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)',  textAlign: 'center' }}>

            <Stack direction='column' spacing={3} display='flex' alignItems='center' justifyContent='center' width='100%'>

              <Avatar
                alt="Remy Sharp"
                src={image2}
                sx={{ width: 80, height: 80 }}
              />

              <Typography align='center' variant='h5' color=' #000000' fontWeight='800'>MR FEMI OKUNADE</Typography>
              <Typography align='center' mt='0 !important' color='#3d6cb9' fontWeight='500'>SECRETARY</Typography>
              <blockquote>
                It is not the critic who counts; not the man  who points out how the strong man stumbles, or where the doer of deeds
              </blockquote>


            </Stack>


          </Box>

        </Grid>

        {/* Our Values */}
        <Grid item md={4} xs={4} display='flex' alignItems='center' justifyContent='center'>

          <Box mr='20px' maxWidth='350px' height='400px' display='flex' alignItems='center' justifyContent='center' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)',  textAlign: 'center' }}>

            <Stack direction='column' spacing={3} display='flex' alignItems='center' justifyContent='center' width='100%'>


              <Avatar
                alt="Remy Sharp"
                src={image3}
                sx={{ width: 80, height: 80 }}/>

              <Typography align='center' variant='h5' color=' #000000' fontWeight='800'> MR BAMIKOLE OLUWAFEMI</Typography>
              <Typography align='center' mt='0 !important' color='#3d6cb9' fontWeight='500'>FINANCIAL SECRETARY</Typography>
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