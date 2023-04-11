import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/Theme';
import { ReadMore, ViewMore, Donations, WorshipBtn } from '../../components/Interface/Buttons/Buttons';
import { Box, Stack, Typography, Grid, Fab } from '@mui/material';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import pastor from '../../assets/images/pastor.jpg'
import { Typewriter } from 'react-simple-typewriter';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CardComp from '../../components/Interface/Cards/CardComp';
import YoutubeEmbed from '../../components/Interface/YoutubeEmbed/YoutubeEmbed';
import NewsLetter from '../../components/Interface/NewsLetter/NewsLetter';
import Footer from '../../layouts/Footer/Footer';
import Church from '../../assets/svgs/church-one.png';
import Mission from '../../assets/svgs/mission.png';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CardComponent from '../../components/Interface/CardComponent/CardComponent';
import domi from '../../assets/images/dominion.png';
import bsf from '../../assets/images/bsf.png';
import Book from '../../assets/images/books.png';
import Ga from '../../assets/images/ga.png';
import Ra from '../../assets/images/Fforma2.png';
import NBC from '../../assets/images/NBC.jpg';
import Marquee from "react-fast-marquee";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Sermon from '../../components/Interface/Sermon/Sermon';

import './Home.css'


interface MarqueeProps {
  gradient?: boolean;
  speed?: number;
}



const Home: React.FC<MarqueeProps> = () => {

     
  return (

    <ThemeProvider theme={theme}>


      <Box className='background' sx={{ paddingLeft: { xs: '20px', md: '60px' }, height: { xs: '450px', md: '600px' } }} width='100%' display='flex' justifyContent='center' alignItems='center'>


        <Stack direction='column' spacing={2} sx={{ paddingRight: { md: '620px', xs: '20px' } }} className='parent'>

          <Typography sx={{ fontSize: { md: '4.2rem', xs: '3.2em' } }} variant='h2' fontWeight='700' color='#000000' lineHeight='1.1em'>
            <span style={{ color: '#ffb174', }}>Estate  <br /> </span>Baptist Church</Typography>

          <Typography color='#000000' sx={{ fontSize: { md: '20px', xs: '16px' } }} fontWeight='400'> A group of individuals in a small town
            the United States began to discuss their and shared beliefs and desire just to  all come together and

            {/* Typewriter */}
            <span style={{ fontWeight: '600' }}> &nbsp;
              <Typewriter
                words={['Worship', 'Pray', 'Fellowship']}
                loop={1000000000000000}
                cursor
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000} />
            </span>
          </Typography>

          <Stack direction='row' spacing={2}>
            <ViewMore variant='contained'>View More</ViewMore>
            <Donations>Donations</Donations>
          </Stack>
        </Stack>


        <Stack spacing={1} direction='row' className="content" >

          <AccessTimeIcon sx={{ color: '#ffb174' }} />

          <Typography color='#777' data-aos="fade-left" >Join us on Sunday by 9pm</Typography>

        </Stack>

      </Box>


      <Box mt='70px'>
        <Marquee gradient={false} speed={50}>
          <Stack direction='row' height='100px'>
            <Box className='container' display='flex' alignItems='center' justifyContent='center'>
              <img src={NBC} className='marquee-images' alt="nbc" />
            </Box>

            <Box className='container'>
              <img src={domi} className='marquee-images' alt="dominionbc" />
            </Box>

            <Box className='container'>
              <img src={Ga} className='marquee-images' alt="GA" />
            </Box>

            <Box className='container'>
              <img src={bsf} className='marquee-images' alt="BSF" />
            </Box>

            <Box className='container'>
              <img src={Ra} className='marquee-images' alt="RA" />
            </Box>

          </Stack>

        </Marquee>


      </Box>

      {/* Worship with us */}
      <Box width='100%' display='flex' justifyContent='center' alignItems='center' mt='40px'>
        <WorshipBtn variant='outlined' endIcon={<ChurchOutlinedIcon />} size='small'>
          Worship with us this sunday</WorshipBtn>
      </Box>


      <Box width='100%' mt='50px' className='box2' pb='30px'>

        {/* History */}
        <Grid container mt='20px'>

          <Grid item md={6} xs={12}>

            <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>

              <img src={Church} alt="church" style={{ width: '50px' }} />

              <Typography align='center' sx={{ fontSize: { md: '36px', xs: '26px' } }} fontWeight='900'>BRIEF HISTORY</Typography>

              <Typography align='center' variant='h6' fontWeight='400' color='#777'>Estate Baptist Church</Typography>

            </Stack>

            <Stack mt='15px' direction='column' position='relative' display='flex' alignItems='center' justifyContent='center' spacing={2} sx={{ paddingLeft: { xs: '20px', md: '60px' } }}>

              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box sx={{ transform: 'rotate(180deg)', zIndex: 1, flex: 0.2, backgroundColor: '#ffb174', width: '2px !important', height: { md: '100px', xs: '150px' }, }} mr='10px'></Box>
                <Typography color='#777' style={{ flex: 20 }} align='left' variant='body1' fontWeight='400' fontSize='15px' >
                  In the year 1950, a group of individuals in a small town in the United States
                  began to discuss their shared beliefs and desire to all worship together.
                  These individuals came fr various backgrounds, but all shared a deep a faith in God
                  and a desire to follow His teachings.
                </Typography>
              </Box>


              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box sx={{ transform: 'rotate(180deg)', zIndex: +1, flex: 0.2, backgroundColor: '#ffb174', width: '2px !important', height: { md: '50px', xs: '60px' }, }} mr='10px'></Box>
                <Typography color='#777' style={{ flex: 20 }} align='left' variant='body1' fontWeight='400' fontSize='15px' >

                  Over the years, the Community of Faith still continued to grow and spread
                  its message of love and acceptance to others in the area.

                </Typography>
              </Box>


              <Box paddingTop='40px' width='100%' alignContent='flex-start'>
                <ReadMore sx={{ display: { xs: 'none', md: 'flex' }, }} variant='outlined' endIcon={<ArrowForwardIosOutlinedIcon />}>Read More</ReadMore>
              </Box>

            </Stack>

          </Grid>

          {/* Grid 2 - Pastor */}
          <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Stack direction='column' spacing={4}>

              <img src={pastor} alt='pastor' className='pastor' />

              <ReadMore sx={{ display: { xs: 'flex', md: 'none' }, marginTop: '30px', alignSelf: 'center' }} variant='outlined' endIcon={<ArrowForwardIosOutlinedIcon />}>Read More</ReadMore>
            </Stack>

          </Grid>
        </Grid>
      </Box>

      {/* What we  stand for */}
      <Stack mt='50px' direction='column' width='100%' display='flex' justifyContent='center' alignItems='center'>

        <img src={Mission} alt="mission" style={{ width: '50px' }} />

        <Typography sx={{ fontSize: { md: '36px', xs: '26px' } }} fontWeight='900' align='center'> WHAT WE BELIEVE </Typography>
        <Typography variant='h6' fontWeight='400' align='center' color='#777'>Our Vision, Mission and Values </Typography>

        <Box mt='30px'>
          <CardComp />
        </Box>

      </Stack>


      <Box width='100%' mt='60px' sx={{ backgroundColor: '#fafaf6' }} >

        <Grid container>
          <Grid item md={6} xs={12} height='350px' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction='column' spacing={2} sx={{ paddingLeft: { xs: '20px', md: '60px' } }} >

              <Typography align='left' sx={{ fontSize: { md: '40px', xs: '26px' } }} fontWeight='600' color='#000000'>
                Upcoming
                <span style={{ fontWeight: 800, color: '#ffb174' }}> Events </span>
              </Typography>

              <Typography align='left' variant='body1' fontWeight='400' fontSize='16px' color='#4d4f53'>
                We are excited to announce our upcoming event that will take place on [date] at [time].
                This event will be a great opportunity for all of us to come together and celebrate
                our organization's achievements as well as plan for the future.
              </Typography>

              <ReadMore sx={{ display: { xs: 'flex', md: 'none' }, }} variant='outlined' endIcon={<ArrowForwardIosOutlinedIcon />}>Read More</ReadMore>
            </Stack>
          </Grid>

          <Grid item md={6} xs={12} display='flex' justifyContent='center' alignItems='center' sx={{ marginTop: { xs: '50px' } }}>


            <YoutubeEmbed embedId="61T_DDuBYrY" />


          </Grid>

        </Grid>

      </Box>

      <Box width='100%' mt='50px' >
        <Stack display='flex' justifyContent='center' alignItems='center'>

        <img src={Book} alt="book" style={{ width: '50px' }} />
      <Typography align='center' sx={{ fontSize: { md: '36px', xs: '26px' } }} fontWeight='800'>Latest Sermon</Typography>
         <Typography mb='20px' align='center' variant='h6' fontWeight='400' color='#777'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </Typography>
        </Stack>
     

         <Box mt='30px'>
         <Sermon/>
         </Box>
        
      </Box>



      <Box width='100%' mt='80px'>
        <Typography align='center' sx={{ fontSize: { md: '36px', xs: '26px' } }} fontWeight='900'>EXECUTIVES</Typography>
         <Typography mb='20px' align='center' variant='h6' fontWeight='400' color='#777'>All elected council members 2023</Typography>
        <Marquee gradient={false} speed={50}>
          <CardComponent />
        </Marquee>

      </Box>

      




      {/* News letter */}
      <Box mt='80px' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <NewsLetter />
      </Box>

      {/* Footer */}
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

export default Home;