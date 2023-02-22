import React from 'react';

import { Container, Typography, Box, Grid } from '@mui/material';

import { BsCheckLg } from 'react-icons/bs';

const textMarquee = [
  'free account',
  '0% maintenance',
  'support 24/7',
  'low interest rates',
  'free account',
  '0% maintenance',
  'support 24/7',
  'low interest rates',
];

const About = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} my={8}>
          <Grid item md={6} xs={12} >
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 'bold', my: 2, color: 'rgb(45, 49, 77)' }}
            >
              nice to meet you
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              voluptas obcaecati incidunt reiciendis recusandae vel suscipit eos
              error rerum nisi laudantium aliquid odio magni.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} sx={{}}>
            <img
              src="https://factorialhr.es/wp-content/uploads/2020/11/19185402/digitalizar-empresa-min.jpg"
              alt="imagen about us"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
      <marquee
        style={{
          backgroundColor: '#000',
          color: '#cecece',
          padding: '.8rem 0',
          display: 'flex',
        }}
      >
        {textMarquee.map((item, index) => (
          <span key={index} style={{ margin: '0 2rem', alignItems: 'center' }}>
            <BsCheckLg color="white" />{' '}
            <span
              style={{
                margin: '0 .8rem',
                textTransform: 'uppercase',
                fontSize: 'small',
              }}
            >
              {item}
            </span>
          </span>
        ))}
      </marquee>
      <Container maxWidth="lg">
        <Grid container spacing={2} my={8} direction="row-reverse">
          <Grid item md={6} xs={12}>
            <Typography
              variant="h4"
              component="h3"
              sx={{ fontWeight: 'bold', my: 2, color: 'rgb(45, 49, 77)' }}
            >
              we work with criptocurrencies
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              voluptas obcaecati incidunt reiciendis recusandae vel suscipit eos
              error rerum nisi laudantium aliquid odio magni.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} sx={{}}>
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/06/top-cryptocurrencies.jpeg"
              alt="imagen criptocurrencies"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
