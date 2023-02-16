import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ item }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'transparent',
        p:2,
        gap:2,
        boxShadow:'none'
      }}
    >
      <CardMedia>{item.icon}</CardMedia>
        <Typography gutterBottom variant="h6" component="h3">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
    </Card>
  );
}
