import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import MediaCard from './CardWhy';

import IconApi from '@/components/icons/IconApi';
import IconOnline from '@/components/icons/IconOnline';
import IconBudgeting from '@/components/icons/IconBudgeting';
import IconOnboarding from '@/components/icons/IconOnboarding';

const cardDescription = [
  {
    icon: <IconOnline />,
    title: 'Online Banking',
    text: 'Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: <IconBudgeting />,
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    icon: <IconOnboarding />,
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: <IconApi />,
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];

const WhyChoose = () => {
  return (
    <Box sx={{ pt: 8, background: 'hsl(220, 16%, 96%)' }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography sx={{ my: 2 }} variant="h4" component="h2">
              Why choose Easybank?
            </Typography>
            <Typography variant="body2" component="p" color="#647E68">
              Take your financial life online. Your Easybanck account will be a
              onse-stop-shop for spending, saving, budgeting,investing, and much
              more.
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ py: 4 }} container spacing={2}>
          {cardDescription.map((item) => (
            <Grid key={item.title} item xs={12} md={3}>
              <MediaCard  item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChoose;
