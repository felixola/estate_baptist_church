import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  IconButton,
  Typography,
  Divider,
  AvatarGroup,
  Avatar,
  Grid,
  Fab,
  Breadcrumbs,
  Pagination
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/Theme';
import YoutubeLive from '../../components/Interface/YoutubeLive/YoutubeLive';
import VideocamIcon from '@mui/icons-material/Videocam';
import image1 from '../../assets/images/image3.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import avatarimage1 from '../../assets/images/pastor.jpg';
import './Live.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import YoutubeEmbed from '../../components/Interface/YoutubeEmbed/YoutubeEmbed';
import Search from '../../assets/svgs/search.svg';
import Settings from '../../assets/svgs/setting-config.svg';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import Aos from 'aos';
import 'aos/dist/aos.css';

// AIzaSyBlq7GCUq5P3vmXGT-q9G8_N_o4ySkqSJc


interface Item {
  id: number;
  Youtube: string;
  Avat: any;
  Title: string;
  Minister: string;
  Time: string;

}

export const items: Array<Item> = [
  {
    id: 1,
    Youtube: "sVKNQ0OaeuY",
    Avat: image1,
    Title: "ElEWI E'LESE",
    Minister: "Spirit of prophecy",
    Time: "2hrs ago",
  },

  {
    id: 2,
    Youtube: "QxHEsXt9K20",
    Avat: image2,
    Title: "FAVOUR IN THE STORM",
    Minister: "Joel Osteen",
    Time: "24/Aril/2023",
  },
  {
    id: 3,
    Youtube: "8M_0eNtcmMo",
    Avat: image3,
    Title: "THE MASTER NAGOTIATOR",
    Minister: "Bishop TD Jakes",
    Time: "Yesterday",
  },

  {
    id: 4,
    Youtube: "3xcIXPcT4ys",
    Avat: avatarimage1,
    Title: "VICTORY BEGINS IN THE DARK",
    Minister: "Joel Osteen",
    Time: "23/Aril/2023",
  },
  {
    id: 5,
    Youtube: "-C213vCvVuc",
    Avat: image2,
    Title: "TOMORROW BELONGS TO GOD",
    Minister: "Bishop TD Jakes",
    Time: "01/Jan/2023",
  },
  {
    id: 6,
    Youtube: "1oSthbCBkhU",
    Avat: image3,
    Title: "THE VICTORIOUS CHRISTAIN",
    Minister: "Tony Evans Classics",
    Time: "23/Dec/2023",
  },

];


const Live: React.FC = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 200,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>

      <Box role="presentation" mt='10px' ml='10px'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/material-ui/getting-started/installation/">
            <VideocamIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Live
          </Link>
        </Breadcrumbs>
      </Box>

      <Box className='avatar'>

        <Stack direction='column' data-aos="zoom-in"  display='flex' alignItems='center' justifyContent='center' mt='40px'>
          <VideocamIcon sx={{ color: '#ffb174', fontSize: { xs: '40px', md: '60px' } }} />

          <Typography fontWeight='900' sx={{ fontSize: { xs: '30px', md: '3em' } }} align='center'>WATCH EBC LIVE STREAMING!!!</Typography>
          <Typography fontWeight='400' sx={{ fontSize: { xs: '18px', md: '1.2em' } }} align='center' color='#919191'>Stream and view all live videos</Typography>
        </Stack>

        {/* Youtube video */}
        <Stack width='100%' mt='25px'>


          <YoutubeLive embedId="yxKxeLClShQ" />

        </Stack>

        {/* Avatar image1 */}
        <Box display='flex' alignItems='left' width='100%' pb='10px' px='18px' sx={{ backgroundColor: '#f5f5f5' }} >

          <Stack spacing={1} direction='row' display='flex' alignItems='center' mt='10px'>
            <AvatarGroup max={2} >

              <Avatar alt="Remy Sharp" sx={{ width: 35, height: 35 }} src={avatarimage1} />
              <Avatar alt="Remy Sharp" src={image2} sx={{ width: 35, height: 35 }} />

            </AvatarGroup>

            <Typography variant='subtitle1' fontWeight='700'>EXPERIENCING GOD WITH PREMIUM WORSHIP </Typography>

          </Stack>

        </Box>

      </Box>


      <Box width='100%' mt='20px' px='10px' display='flex' flexDirection='row'>

        <Stack direction='row' spacing={0} alignItems='center' flexGrow='1'>

          <IconButton >
            <img src={Settings} alt='settings' className='icons' />
          </IconButton>

          <Typography variant='body1' fontWeight='400'>Filter</Typography>
        </Stack>

        <IconButton>
          <img src={Search} alt='search' className='icons' />
        </IconButton>
      </Box>

      <Divider />


      {/* Today */}
      <Box>

        <Grid container>

          <Grid item md={6} xs={12} px='20px' >

            <Stack mt='20px' direction='column' spacing={0}>
              
              <Typography fontWeight='900' sx={{ fontSize: { xs: '20px', md: '1.2em' } }}> TODAY</Typography>

            </Stack>


            <Stack pb='20px' spacing={0} direction='column' mt='20px' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' }}>
              <YoutubeEmbed embedId="_5Zd8rlomBI" />

              <Box pl='15px' mt='10px'>

                <Stack direction='column' spacing={0} >

                  <Avatar alt="Remy Sharp" sx={{ width: 35, height: 35 }} src={avatarimage1} />
                 

                    <Typography fontWeight='700'> PUT GOD FIRST </Typography>
                    <Typography fontWeight='400' color='#919191'>Billy Graham</Typography>
                    <Typography fontWeight='400' color='#919191' variant='body2'>2hrs ago</Typography>
                
                </Stack>
              </Box>
            </Stack>

          </Grid>
        </Grid>


        {/* OLDER VIDEOS */}


        <Stack mt='20px' px='20px' direction='column' spacing={0}>

          <Typography fontWeight='900' sx={{ fontSize: { xs: '20px', md: '1.2em' } }}>OLDER</Typography>

        </Stack>            

        {/* Sermon videos */}
        <Grid container>

          {items.map((cart) => (

            <Grid item xs={12} md={6} px='20px' data-aos="zoom-in">

              <Stack pb='20px' spacing={0} direction='column' mt='20px' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' }}>
                <YoutubeEmbed embedId={cart.Youtube} />

                <Box pl='15px' mt='15px'>
                  <Stack direction='row' spacing={1} display='flex' alignItems='center'>

                    <Stack direction='column' spacing={0}>

                      <Avatar alt="Remy Sharp" src={cart.Avat} sx={{ width: 35, height: 35 }} />

                      <Typography fontWeight='700'>{cart.Title}</Typography>
                      <Typography fontWeight='400' color='#919191'> {cart.Minister}</Typography>
                      <Typography fontWeight='400' color='#919191' variant='body2'>{cart.Time}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>

          ))}

        </Grid>

      </Box>


      <Box mt='50px' width='100%' display='flex' alignItems='center' justifyContent='center' mb='20px'>
        <Pagination count={15} shape="rounded" />
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
    </ThemeProvider >
  );
}

export default Live;