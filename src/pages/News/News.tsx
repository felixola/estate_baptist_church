import React from 'react';
import { ThemeProvider, Box, Breadcrumbs, Link } from '@mui/material';
import theme from '../../components/Theme';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';


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
            <NewspaperIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            News
          </Link>
        </Breadcrumbs>
      </Box>
    </ThemeProvider>
  )
}

export default News