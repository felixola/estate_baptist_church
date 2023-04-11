import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/Theme';


const Live: React.FC = () => {
  return (
    <ThemeProvider theme={theme}> 

    <Box width='100%' height='600px' display='flex' alignItems='center' justifyContent='center'>

      <Typography variant='h4' fontWeight='600px' align='center'>
        Watch us live today
      </Typography>

    </Box>
    </ThemeProvider>
  )
}

export default Live