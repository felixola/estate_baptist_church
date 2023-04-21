import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const CardComp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4}>

      {/* border: '0.5px solid #E8E2E2', */}
        {/* Vision */}
        <Grid item md={4} xs={12} position='relative' display='flex' alignItems='center' justifyContent='center'>
          <Card sx={{ maxWidth: 340, height: 400, boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' , }} >
            <CardContent>
              <Typography variant='h6' fontWeight='600' align='left'> Our Vision </Typography>
              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                The vision for our organization is to
                create a world where all individuals
                have the opportunity to thrive and
                reach their full potential. We envision 
                a society where everyone has access to the resources,
                 education, and support they need to succeed, 
                 regardless of their background or circumstances.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Our mission */}
        <Grid item md={4} xs={12} position='relative' display='flex' alignItems='center' justifyContent='center'>
          <Card sx={{ maxWidth: 340, height: 400, boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' , }} >
            <CardContent>
              <Typography variant='h6' fontWeight='600' align='left'> Our Mission </Typography>
              <Typography variant='body1' sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
              The mission of our organization is to improve the 
              lives of individuals and communities through sustainable 
              and innovative solutions. We aim to address some of the 
              most pressing social and environmental clean water, and economic opportunity.
              </Typography>
              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
              Our ultimate goal is to create a more just, equitable, 
              and sustainable world for all, where every individual has 
              the opportunity to thrive and reach their full potential. 
              Through our mission and work, we hope to inspire and 
              empower others to join us in this vital mission.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Our Values */}
        <Grid item md={4} xs={12} position='relative' display='flex' alignItems='center' justifyContent='center'>
          <Card sx={{ maxWidth: 340, height: 400, boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)' ,}}>
            <CardContent>
              <Typography variant='h6' fontWeight='600' align='left'> Our Values </Typography>
              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
              Ultimately, our values are what set us apart and 
              guide us in all our endeavors. We strive to live 
              up to these principles every day, and to be a 
              positive force for change in the world.
              </Typography>
              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom> 
              The opportunity to thrive and reach their full potential. 
              Through our mission and work, we hope to inspire and 
              empower others to join us in this vital mission.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default CardComp