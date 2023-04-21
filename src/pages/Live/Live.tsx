import React from 'react';
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
import avatarimage2 from '../../assets/images/pastor.jpg';
import avatarimage1 from '../../assets/images/pastor.jpg';
import './Live.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import YoutubeEmbed from '../../components/Interface/YoutubeEmbed/YoutubeEmbed';
import Footer from '../../layouts/Footer/Footer';
import Search from '../../assets/svgs/search.svg';
import Settings from '../../assets/svgs/setting-config.svg';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
// AIzaSyBlq7GCUq5P3vmXGT-q9G8_N_o4ySkqSJc


interface Item {
  id: number;
  Head?: string;
  Youtube: string;
  Avat: any;
  Title: string;
  Minister: string;
  Time: string;

}

export const items: Array<Item> = [
  {
    id: 1,
    Head: "TODAY",
    Youtube: "sVKNQ0OaeuY",
    Avat: image1,
    Title: "ElEWI E'LESE",
    Minister: "Spirit of prophecy",
    Time: "2hrs ago",
  },

  {
    id: 2,
    Head: "OLDER",
    Youtube: "3xcIXPcT4ys",
    Avat: avatarimage1,
    Title: "VICTORY BEGINS IN THE DARK",
    Minister: "Joel Osteen",
    Time: "Yesterday",
  },
  {
    id: 3,
    Youtube: "-C213vCvVuc",
    Avat: image2,
    Title: "TOMORROW BELONGS TO GOD",
    Minister: "Bishop TD Jakes",
    Time: "01/Jan/2023",
  },
  {
    id: 4,
    Youtube: "1oSthbCBkhU",
    Avat: image3,
    Title: "THE VICTORIOUS CHRISTAIN",
    Minister: "Tony Evans Classics",
    Time: "23/Dec/2023",
  },


];


const Live: React.FC = () => {


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

        <Stack direction='column' display='flex' alignItems='center' justifyContent='center' mt='40px'>
          <VideocamIcon sx={{ color: '#ffb174', fontSize: '40px' }} />

          <Typography fontWeight='900' variant='h6' align='center'>WATCH EBC LIVE STREAMING</Typography>
          <Typography fontWeight='400' variant='body1' align='center' color='#919191'>Stream and view all live videos</Typography>
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

            <Typography variant='subtitle1' fontWeight='700'>Experiencing God </Typography>

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

        {/* Sermon videos */}
        <Grid container>

          {items.map((cart) => (

            <Grid item xs={12} px='20px'>
              <Stack mt='20px' direction='column' spacing={0}>
                <Typography fontWeight='900'>{cart.Head}</Typography>

              </Stack>

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


      <Box mt='50px' width='100%' display='flex' alignItems='center' justifyContent='center'>
        <Pagination count={15} variant="outlined" shape="rounded" />
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
    </ThemeProvider >
  );
}

export default Live;