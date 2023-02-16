import { Container, Box, Grid, Typography, Link } from '@mui/material';
import React from 'react';


import Logo from '@/components/icons/Logo';
import BtnLogin from '@/components/BtnLogin';

import {
  FaYoutube,
  FaYoutubeSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const redes = [
  <FaYoutube />,
  <FaYoutubeSquare />,
  <FaTwitter />,
  <FaPinterest />,
  <FaInstagram />,
];


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'hsl(233, 26%, 24%)',
        color: 'hsl(0, 0%, 100%)',
        py: 4,
        mt: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'grid', justifyContent: 'center' }}
          >
            <Box component="div" sx={{ display: { xs: 'flex', sm: 'flex' } }}>
              <Logo fill="#ffffff" />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', gap: 2, py: 2 }}>
              {redes.map((red, index) => (
                <Link key={index} href="#" color="#fff">
                  {red}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container textAlign={{ xs: 'center', md: 'start' }}>
              <Grid item md={6} xs={12} sx={{ py: 0.5 }}>
                <Link href="#" underline="hover" color="#fff" >
                  About Us
                </Link>
              </Grid>
              <Grid item md={6} xs={12} sx={{ py: 0.5 }}>
                <Link href="#" underline="hover" color="#fff">
                  Careers
                </Link>
              </Grid>
              <Grid item md={6} xs={12} sx={{ py: 0.5 }}>
                <Link href="#" underline="hover" color="#fff">
                  Contact
                </Link>
              </Grid>
              <Grid item md={6} xs={12} sx={{ py: 0.5 }}>
                <Link href="#" underline="hover" color="#fff">
                  Support
                </Link>
              </Grid>
              <Grid item md={6} xs={12} sx={{ py: 0.5 }}>
                <Link href="#" underline="hover" color="#fff">
                  Blog
                </Link>
              </Grid>
              <Grid item md={6} xs={12} sx={{ py: 0.5 }}>
                <Link href="#" underline="hover" color="#fff">
                  Privacy Policy
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box>
                <BtnLogin />
              </Box>
              <Typography variant="caption" color="#647E68" sx={{ py: 1 }}>
                @Desarrollado con ❤️ por ChBdev
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
