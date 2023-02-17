import React from 'react';

import { Container, Typography, Box } from '@mui/material';

const Blog = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, my: 8 }}>
        <Typography variant="h3" component="h1" textAlign="center">
          Blog
        </Typography>
      </Box>
    </Container>
  );
};

export default Blog;
