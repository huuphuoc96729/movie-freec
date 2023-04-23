import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

class CardMovie extends React.Component {

  render() {
    const {data} = this.props;
    const {Type, Title, Year, Poster} = data;
    return (
      <div className="card-movie">
        <div className="type">
          {Type.charAt(0).toUpperCase() + Type.slice(1)}
        </div>
        <Card className='text-center' sx={{height: '360px'}}>
          <CardMedia
            component="img"
            alt=""
            height="300px"
            image={Poster}
          />
          <CardContent className='p-2'>
            <div className="title mt-1 mb-1">{Title}</div>
            <div className="year mb-1">({Year})</div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default CardMovie;