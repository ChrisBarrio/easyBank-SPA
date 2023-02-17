import React from 'react';

import { Container, Typography, Box } from '@mui/material';

import ImgConstruction from '@/images/pageConstruction.png';

const Careers = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          my: 6,
        }}
      >
        <Container maxWidth="xs" sx={{ mt: 8 }}>
          <Typography variant="h5" component="h6" color='grey' textAlign="center">
            Página disponible en breve
          </Typography>
          <img
            src={ImgConstruction}
            alt="imagen de pagina en construccion"
            width="100%"
            style={{marginTop:'3rem'}}
          />
        </Container>
      </Box>
    </Container>
  );
};

export default Careers;


