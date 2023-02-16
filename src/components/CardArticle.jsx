import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.imagen ? item.imagen : 'src/images/no-image.png'}
          alt={item.alt}
        />

        <CardContent>
          <Typography variant="body3" color="text.secondary">
            By {item.writer}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
