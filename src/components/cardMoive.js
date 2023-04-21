import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

class CardMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const {Type, Title, Year, Poster} = data;
    return (
      <>
      <div className="type">
        {Type.charAt(0).toUpperCase() + Type.slice(1)}
      </div>
      <Card className='text-center' sx={{height: '360px'}}>
        <CardMedia
          component="img"
          alt=""
          height="300px"
          image={Poster}
           // style={{
           //   width: 'auto', margin: '0 auto'
           // }}
        />
        <CardContent className='p-2'>
          <div className="title pt-1 pb-1">{Title}</div>
          <div className="year pb-1">({Year})</div>
        </CardContent>
      </Card>
      </>
    )
  }
}

export default CardMovie;