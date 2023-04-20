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

            
              <YoutubeEmbed embedId="o4xD01nVVR4" />
         


            <Stack direction='column' spacing={1}>
              <Typography variant='h5' fontWeight='500' >Alive with Christ</Typography>
              <Typography color='#777' fontWeight='400'>Speaker:
                <span style={{ color: '#cb3b3b' }}> Revd M.O Akinola</span>
              </Typography>

              <Typography variant='body1'  color='#777' fontWeight='400' >Lorem ipsum dolor sit amet </Typography>
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
              <Typography variant='h5' fontWeight='500'>Resurrection Celebration</Typography>
              <Typography color='#777' fontWeight='400'>Speaker:
                <span style={{ color: '#cb3b3b' }}> Revd A.J Adefarasin</span>
              </Typography>
              <Typography variant='body1'  color='#777' fontWeight='400' >Lorem ipsum dolor sit amet </Typography>
              <Typography color='#777' fontWeight='400'> Date: 6 April 2023 </Typography>

              <Stack direction='row'>
                <Link underline='none' href="#" variant="button" color='#cb3b3b'> Read More
                </Link>
                <ArrowRightAltIcon sx={{ color: '#cb3b3b' }} />
              </Stack>
            </Stack>

            
              <YoutubeEmbed embedId="57Mw8HcQVS0" />
           

          </Stack>


        </Grid>

        <Right><ArrowForwardIosIcon /></Right>

      </Grid>
    </Box>
  )
}

export default Sermon