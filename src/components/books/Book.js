import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({book}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='book'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={book.imageLinks.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h3>Author : {book.authors[0]}</h3>
        </Typography>
        <Typography>
            {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a  href={book.infoLink} ><Button size="small" >INFO</Button></a>
        <a  href={book.previewLink} ><Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  );
}
