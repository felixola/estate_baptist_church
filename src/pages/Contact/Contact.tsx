import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Grid, Typography, Stack, FormControl, InputAdornment } from '@mui/material';
import { InputText, InputOthers, SendMsg } from '../../components/Interface/Buttons/Buttons';
import theme from '../../components/Theme';
import background from '../../assets/images/pedro-lima-IkqhfoJjwSI-unsplash.jpg';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './Contact.css';


const Contact: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>

      <Grid container>
        {/* image */}
        <Grid item md={6} xs={12} width='100%' >
          <Box sx={{ height: { md: '800px', xs: '300px' } }}>
            <img src={background} alt="image1" className='image1'/>
          </Box>

        </Grid>

        {/* Contact */}

        <Grid item md={6} xs={12}>
          {/* Heading */}
          <Stack direction='column' pt='40px' display='flex' alignItems='center' justifyContent='center'>
            <Typography fontWeight='900' sx={{ fontSize: { md: '1.5rem', xs: '20px' } }} align='left'>
              <span style={{ fontWeight: 400 }}>
                GET IN </span> TOUCH WITH US</Typography>
            <Typography variant='body1' color='#919191' align='left'>24/7 We will answer your questions </Typography>
            <Typography variant='body1' color='#919191' align='left'>You can reach us anytime via <span style={{ color: '#3d6cb9', fontWeight: 500 }}>
              ebcinfo@gmail.com
            </span> </Typography>
          </Stack>

          {/* Contact Starts */}
          <Stack direction='column' spacing={4} display='flex' alignItems='center' justifyContent='center'>

            {/* First and last Name */}
            <Stack direction='row' spacing={2} px='20px' py='40px'>
              {/* First Name */}
              <Box>
                <FormControl>
                  <Stack spacing={1} direction='column'>
                    <label htmlFor='name'><Typography fontWeight='500' align='left'>First Name</Typography></label>
                    <InputText
                      required
                      InputProps={{
                        startAdornment: <InputAdornment position="start">
                          <PersonIcon sx={{ color: '#919191' }} /></InputAdornment>,}}
                      size='medium'
                      id="my-input" aria-describedby="my-helper-text" variant='outlined' />
                  </Stack>
                </FormControl>
              </Box>

              {/* Last Name */}
              <Box>
                <FormControl>
                  <Stack spacing={1} direction='column'>
                    <label htmlFor='name'><Typography fontWeight='500' align='left'>Last Name</Typography></label>
                    <InputText
                      required
                      InputProps={{
                        startAdornment: <InputAdornment position="start">
                          <PersonIcon sx={{ color: '#919191' }} /></InputAdornment>,
                      }}
                      size='medium'
                      id="my-input" aria-describedby="my-helper-text" variant='outlined' />
                  </Stack>
                </FormControl>
              </Box>
            </Stack>

            {/* email */}
            <Box >
              <FormControl>
                <Stack spacing={1} direction='column'>
                  <label htmlFor='name'><Typography fontWeight='500' align='left'>Email</Typography></label>
                  <InputOthers
                    required
                    InputProps={{
                      startAdornment: <InputAdornment position="start">
                        <EmailIcon sx={{ color: '#919191' }} /></InputAdornment>,
                    }}
                    size='medium'
                    id="my-input" aria-describedby="my-helper-text" variant='outlined' />
                </Stack>
              </FormControl>
            </Box>

            {/* Phone number */}
            <Box px='20px' py='40px'>
              <FormControl>
                <Stack spacing={1} direction='column'>
                  <label htmlFor='name'><Typography fontWeight='500' align='left'>Phone Number</Typography></label>
                  <InputOthers
                    required
                    InputProps={{
                      startAdornment: <InputAdornment position="start">
                        <PhoneIcon sx={{ color: '#919191' }} /></InputAdornment>,
                    }}
                    size='medium'
                    id="my-input" aria-describedby="my-helper-text" variant='outlined' />
                </Stack>
              </FormControl>
            </Box>


            {/* Message */}

            <Box px='20px'>
              <FormControl>
                <Stack spacing={2} direction='column'>
                  <label htmlFor='name'><Typography fontWeight='500' align='left'>Message</Typography></label>
                  <InputOthers
                    required
                    multiline
                    rows={6}
                    placeholder='Enter the details of your message'
                    size='medium'
                    id="my-input" aria-describedby="my-helper-text" variant='outlined' />
                </Stack>
              </FormControl>
            </Box>

            {/* Send */}
            <Box py='2px' px='20px'>
              <SendMsg type='submit'>Send</SendMsg>
            </Box>



          </Stack>


        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Contact