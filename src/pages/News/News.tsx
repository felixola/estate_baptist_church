import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { 
  Box, 
  Breadcrumbs, 
  Link, 
  Stack, 
  Typography, 
  Grid, 
  Button, 
  Pagination, 
  Fab,
  Chip,
 } from '@mui/material';
import theme from '../../components/Theme';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import image1 from '../../assets/images/EBC.png';
import image2 from '../../assets/images/dominion.png';
import image3 from '../../assets/images/image1.jpg';
import avatarimage1 from '../../assets/images/pastor.jpg';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import './News.css';

interface Item {
  id: number;
  image: any;
  Avat: any;
  Title: string;
  Time: string;

}

export const items: Array<Item> = [
  {
    id: 1,
    image: image1,
    Avat: image1,
    Title: "2023 Thanksgiving",
    Time: "2hrs ago",
  },

  {
    id: 2,
    image: image2,
    Avat: image2,
    Title: "Quaterly meeting ",
    Time: "24/Aril/2023",
  },
  {
    id: 3,
    image: image3,
    Avat: image3,
    Title: "Annual Mission Outreach 2023",
    Time: "Yesterday",
  },

  {
    id: 4,
    image: image1,
    Avat: avatarimage1,
    Title: "Praise Concert 2023",
    Time: "23/Aril/2023",
  },
  {
    id: 5,
    image: image2,
    Avat: image2,
    Title: "Dominion BSF Camp",
    Time: "01/Jan/2023",
  },
  {
    id: 6,
    image: "1oSthbCBkhU",
    Avat: image3,
    Title: "Conference Health Outreach",
    Time: "23/Dec/2023",
  },

];

const News: React.FC = () => {

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
            < NewspaperSharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            News
          </Link>
        </Breadcrumbs>
      </Box>




      {/* Header  */}

      <Box className='avata' sx={{ height: { xs: '450px', md: '500px' } }} display='flex' alignItems='center' justifyContent='center'>

        <Stack direction='column'   display='flex' alignItems='center' justifyContent='center'>
          <NewspaperSharpIcon sx={{ color: '#ffb174', fontSize: { xs: '40px', md: '60px' } }} />

          <Typography  fontWeight='900' sx={{ fontSize: { xs: '25px', md: '3em' } }} align='center'>EBC FAMILY NEWS</Typography>
          <Typography  fontWeight='400' sx={{ fontSize: { xs: '18px', md: '1.2em' } }} align='center'>Stay updated with all latest news</Typography>
          {/* color='#919191' */}
        </Stack>
        </Box>


        {/* News */}

        <Grid container>

{items.map((cart) => (

  <Grid item xs={12} md={6} px='20px' >

    <Stack pb='20px' spacing={0} direction='column' mt='20px' sx={{ boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' }}>

      <Box pl='15px' mt='15px'>
        <Stack direction='row' spacing={1} display='flex' alignItems='center'>

          <Box sx={{ width:'100px', height: '100px',}} >

            <img src={cart.Avat} alt="images"  style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%',  borderRadius: '8px'}}/>

          </Box>

          <Stack direction='column' spacing={0} display='flex' alignItems='flex-start' >

            <Typography fontWeight='700'>{cart.Title}</Typography>
            
            <Typography fontWeight='400' color='#919191' variant='body2'>{cart.Time}</Typography>

            <Button endIcon={<DoubleArrowIcon sx={{fontSize: 20}} />} variant='text' sx={{padding: 0,  color: '#000000', fontSize: { xs: '10px', } }}>Read More</Button>

            <Chip size='small' label="News" />

          </Stack>
          
        </Stack>

      </Box>

    </Stack>

  </Grid>

))}

</Grid>

     <Box mt='50px' width='100%' display='flex' alignItems='center' justifyContent='center'>
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

    </ThemeProvider>
  )
}

export default News