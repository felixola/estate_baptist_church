import React from 'react';
import { Box, Stack, Grid, Typography, Link } from '@mui/material';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Right } from '../../Interface/Buttons/Buttons';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




const Sermon: React.FC = () => {
  return (
    <Box width='100%'>


      <Grid container display='flex' justifyContent='center' alignItems='center'>

      

        {/* Grid 1 */}

        <Grid item md={6} xs={12} direction="row"
          justifyContent="center"
          alignItems="center">

          <Stack direction="row"  >

            <Box minWidth='400px' px='20px'>
            <YoutubeEmbed embedId="o4xD01nVVR4" />
            </Box>

            <Stack direction='column' spacing={1}>
              <Typography variant='h5' fontWeight='700' >ALIVE WITH CHRIST</Typography>
              <Typography color='#777' fontWeight='400'>Speaker:
                <span style={{ color: '#cb3b3b' }}> Revd M.O Akinola</span>
              </Typography>

              <Typography color='#777' fontWeight='400'> Date: 1 April 2023 </Typography>

              <Stack direction='row'>
                <Link underline='none' href="#" variant="button" color='#cb3b3b'> Read More
                </Link>
                <ArrowRightAltIcon sx={{ color: '#cb3b3b' }} />
              </Stack>

            </Stack>

          </Stack>


        </Grid>

        {/* Grid 2 */}


        <Grid item md={6} xs={12} direction="row"
          justifyContent="center"
          alignItems="center" sx={{ display: {xs: 'none', md: 'block'}}}>

          <Stack direction="row">


            <Stack direction='column' spacing={1}>
              <Typography variant='h5' fontWeight='700'>RESSURECTION OF CHRIST</Typography>
              <Typography color='#777' fontWeight='400'>Speaker:
                <span style={{ color: '#cb3b3b' }}> Revd A.J Adefarasin</span>
              </Typography>
          
              <Typography color='#777' fontWeight='400'> Date: 6 April 2023 </Typography>

              <Stack direction='row'>
                <Link underline='none' href="#" variant="button" color='#cb3b3b'> Read More
                </Link>
                <ArrowRightAltIcon sx={{ color: '#cb3b3b' }} />
              </Stack>
            </Stack>

            <Box minWidth='400px' px='20px'>

              <YoutubeEmbed embedId="57Mw8HcQVS0" />

            </Box>
           

          </Stack>


        </Grid>

        <Right><ArrowForwardIosIcon /></Right>

      </Grid>
    </Box>
  )
}

export default Sermon