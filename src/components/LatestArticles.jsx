import { Container, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import ActionAreaCard from './CardArticle';

const articles = [
  {
    imagen: 'src/images/image-currency.jpg',
    alt:'image currency',
    writer: 'Claire Robinson',
    title: 'Receive money in any currency with no fees ',
    text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...',
  },
  {
    imagen: 'src/images/image-restaurant.jpg',
    alt:'image restaurant',
    writer: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...',
  },
  {
    imagen: 'src/images/image-plane.jpg',
    alt:'image plane',
    writer: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go ',
    text: 'We want you to enjoy your travels.This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...',
  },
  {
    imagen: 'src/images/image-confetti.jpg',
    alt:'image confetti',
    writer: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live! ',
    text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...',
  },
];

const LatestArticles = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Typography sx={{ my: 2 }} variant="h4" component="h2">
            Latest Articles
          </Typography>
        </Grid>
        <Grid sx={{ py: 4 }} container spacing={2}>
          {articles.map((item) => (
            <Grid key={item.title} item xs={12} md={3}>
              <ActionAreaCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestArticles;
