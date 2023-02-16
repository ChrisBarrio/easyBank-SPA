import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Container } from '@mui/material';

import BtnLogin from '@/components/BtnLogin';
import ImgHero from '@/components/ImgHero';

const HeroSection = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, my:8 }}>
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: 'center',
          }}
        >
          <Grid
            xs={12}
            md={5}
            sx={{
              display: 'grid',
              gap: 3,
              maxHeight: '20rem',
            }}
          >
            <Typography variant="h4" component="h2">
              Next generation digital banking
            </Typography>
            <Typography variant="body2" component="p" color="#647E68">
              Take your financial life online. Your Easybanck account will be a
              onse-stop-shop for spending, saving, budgeting,investing, and much
              more.
            </Typography>
            <Box>
              <BtnLogin />
            </Box>
          </Grid>
          <Grid xs={12} md={7} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ImgHero />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
