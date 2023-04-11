import React from 'react';
import { Box, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';
import { Typography, TextField, Grid } from '@mui/material';
import Send from '../../../assets/images/send.png';
import './NewsLetter.css';

const NewsLetter: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ height: {xs: '250px', md: '300px'}, borderRadius: {md: '20px', xs: 0}, display:'flex', justifyContent: 'center', alignItems: 'center', width: {md: '90%', xs: '100%'}}}  className='box'>

       <Grid container >

        <Grid item md={6} xs={12}>

          <Stack direction='column' spacing={2} sx={{paddingLeft: {md: '40px', xs: '20px'}}}>
       
          <Typography sx={{fontSize: {md: '36px', xs: '26px'}}} fontWeight='700' align='left' color='#FFFFFF'> Subscribe For Newsletter</Typography> 

          <Typography variant='body1' fontWeight='400' fontSize='15px'  align='left' color='#FFFFFF'> 
          To sign up for our newsletter,
          simply visit our website and fill out the subscription form.
            
          </Typography>

            {/* Textfield for subsccribe */}
            <Stack direction='row' spacing={1} display='flex' >

              <TextField 
              sx={{ border: '1px solid #FFFFFF', borderRadius: '10px', width: '270px',}}/>

              <Box sx={{ backgroundColor: '#ff5959', width: '60px', borderRadius: '10px', display: 'flex', justifyContent:'center', alignItems: 'center'}}>

                <img src={Send} alt="send"  style={{ height: '20px', width: '20px', }}/>


              </Box>

            </Stack>

          </Stack>
          </Grid>

            {/* 2 */}

        {/* <Grid item md={6} xs={6} display='flex' justifyContent='center' alignItems='center'>
          <img src={NewsPaper} alt="newspaper" style={{height: '100px', }}/>
        </Grid> */}

        
       </Grid>
       </Box>
    </ThemeProvider>
  )
}

export default NewsLetter