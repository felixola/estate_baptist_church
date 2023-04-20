import React from 'react';
import { Box, Stack, IconButton, Typography, Divider, AvatarGroup, Avatar, Grid, Fab, } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/Theme';
import YoutubeLive from '../../components/Interface/YoutubeLive/YoutubeLive';
import TuneIcon from '@mui/icons-material/Tune';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import avatarimage1 from '../../assets/images/image3.jpg';
import avatarimage2 from '../../assets/images/pastor.jpg';
import Video from '../../assets/svgs/video.svg';
import './Live.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import YoutubeEmbed from '../../components/Interface/YoutubeEmbed/YoutubeEmbed';
import NewsLetter from '../../components/Interface/NewsLetter/NewsLetter';
import { ArrowRight } from '../../components/Interface/Buttons/Buttons';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '../../layouts/Footer/Footer';
// AIzaSyBlq7GCUq5P3vmXGT-q9G8_N_o4ySkqSJc

const Live: React.FC = () => {


  return (
    <ThemeProvider theme={theme}>

      <Box className='avatar'>

        <Stack direction='column' display='flex' alignItems='center' justifyContent='center' mt='20px'>
          <img src={Video} alt='video' className='video' />

          <Typography fontWeight='800' variant='h6' align='center'>Watch EBC Live Streaming</Typography>
        </Stack>



        {/* Youtube video */}
        <Stack width='100%' mt='20px'>


          <YoutubeLive embedId="yxKxeLClShQ" />

        </Stack>

        {/* Avatar image1 */}
        <Box display='flex' alignItems='left' width='100%' pt='10px' pb='10px' px='18px' sx={{ backgroundColor: '#f5f5f5' }} >

          <Stack spacing={1} direction='row' display='flex' alignItems='center'>
            <AvatarGroup max={2} >

              <Avatar alt="Remy Sharp" sx={{ width: 28, height: 28 }} src={avatarimage1} />
              <Avatar alt="Remy Sharp" src={avatarimage2} sx={{ width: 28, height: 28 }} />

            </AvatarGroup>

            <Typography variant='subtitle1' fontWeight='600'>Experiencing God </Typography>

          </Stack>

        </Box>

      </Box>


      <Box width='100%' mt='20px' px='10px' display='flex' flexDirection='row'>

        <Stack direction='row' spacing={0} alignItems='center' flexGrow='1'>

          <IconButton >
            <TuneIcon sx={{ color: '#000000' }} />
          </IconButton>

          <Typography variant='body1' fontWeight='400'>Filter</Typography>
        </Stack>

        <IconButton>
          <LiveTvIcon sx={{ color: '#000000' }} />
        </IconButton>
      </Box>

      <Divider />


      {/* Today */}
      <Box>

        {/* Sermon videos */}
        <Grid container>

          <Grid item xs={12} px='20px' >

            <Stack mt='20px' direction='column' spacing={0}>
              <Typography fontWeight='700'> TODAY</Typography>

            </Stack>


            <Stack pb='20px' spacing={0} direction='column' mt='20px' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' }}>
              <YoutubeEmbed embedId="sVKNQ0OaeuY" />

              <Box pl='15px' mt='10px'>

              <Stack direction='row' spacing={1} display='flex' alignItems='center'>

                <Avatar alt="Remy Sharp" sx={{ width: 35, height: 35 }} src={avatarimage1} />
                <Stack direction='column' spacing={0}>

                <Typography fontWeight='600'> Elewi E'lse </Typography>
                <Typography fontWeight='500' color='#919191'>Spirit of prophecy</Typography>

                </Stack>
                </Stack>
              </Box>
            </Stack>

          </Grid>


          {/* Older */}
          <Grid item xs={12} px='20px' >

            <Stack mt='20px' direction='column' spacing={0}>
              <Typography fontWeight='700'> OLDER</Typography>

            </Stack>

            <Stack pb='20px' spacing={0} direction='column' mt='20px' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' }}>
              <YoutubeEmbed embedId="3xcIXPcT4ys" />

              <Box pl='15px' mt='10px'>
              <Stack direction='row' spacing={1} display='flex' alignItems='center'>

                <Avatar alt="Remy Sharp" src={avatarimage2} sx={{ width: 35, height: 35 }} />

                <Stack direction='column' spacing={0}>

                <Typography fontWeight='600'> Victory Begins In The Dark</Typography>
                <Typography fontWeight='500' color='#919191'> Joel Osteen</Typography>
                </Stack>
                </Stack>
              </Box>
            </Stack>

          </Grid>


          {/* 2 */}

          <Grid item xs={12} px='20px' >

            <Stack mt='20px' direction='column' spacing={0}>

            </Stack>

            <Stack pb='20px' spacing={0} direction='column' mt='20px' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' }}>
              <YoutubeEmbed embedId="-C213vCvVuc" />

              <Box pl='15px' mt='10px'>

                <Stack direction='row' spacing={1} display='flex' alignItems='center'>

                <Avatar alt="Remy Sharp" src={avatarimage2} sx={{ width: 35, height: 35 }} />

                <Stack direction='column' spacing={0}>
                <Typography fontWeight='600'>Tomorrow Belongs to God </Typography>
                <Typography fontWeight='500' color='#919191'> Bishop TD Jakes </Typography>
                </Stack>
                </Stack>

                
              </Box>
            </Stack>

          </Grid>

        </Grid>

        <Box mt='20px' width='100%' display='flex' alignItems='center' justifyContent='center'>
          <ArrowRight><ArrowForwardIosIcon /></ArrowRight>
        </Box>
      </Box>

      <Box mt='80px' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <NewsLetter />
      </Box>


      <Box mt='40px' >
        <Footer />
      </Box>

      <Fab sx={{
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        color: '#FFFFFF',
        backgroundColor: '#3d6cb9',
        position: 'fixed'
      }} size="medium" aria-label="add">
        <NewspaperIcon />
      </Fab>
    </ThemeProvider>
  )
}

export default Live;