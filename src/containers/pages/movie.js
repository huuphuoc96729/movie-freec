import React from 'react';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


class Movie extends React.Component {
  async componentDidMount() {
    const {imdbID} = this.props.match.params;
    if (imdbID) {
      await this.props.onInit({imdbID});
    }
  }

  render() {
    const {info} = this.props;
    if (!info || !info.imdbID) return null;

    return (
      <div className="movie-page pt-4 pb-4">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} className={'text-center'}>
            <img
              className="border-radius-6px"
              style={{width: '100%', maxWidth: '230px', maxHeight: '360px'}}
              src={info.Poster}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <h5 className="text-white">{info.Title}</h5>
            <p>
              <label className="title">Year: </label>
              <label className="content">{info.Year}</label>
            </p>
            <p>
              <CalendarMonthIcon fontSize={'small'}/>
              <label className="content pr-3">{info.Released}</label>

              <AccessAlarmsIcon fontSize={'small'}/>
              <label className="content">{info.Runtime}</label>
            </p>
            <p>
              <label className="title">Country: </label>
              <label className="content">{info.Country}</label>
            </p>
            <p>
              <label className="title">Director: </label>
              <label className="content">{info.Director}</label>
            </p>
            <p>
              <label className="title">Actors: </label>
              <label className="content">{info.Actors}</label>
            </p>
            <p>
              <label className="title">Genres: </label>
              <label className="content">{info.Genre}</label>
            </p>
            <p>
              <label className="content d-contents">
                ({parseFloat(info.imdbRating/2).toFixed(1) }/5)
                <Rating className="mr-4" precision={0.5} defaultValue={(parseFloat(info.imdbRating) / 2) || 5}/>
              </label>
            </p>
          </Grid>
          {/*</Grid>*/}
          <Grid item xs={12}/>
          <Grid item xs={12}/>

        </Grid>
        <Grid container className={'border-radius-6px'} item sx={{backgroundColor: '#202a34'}}>
          <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
              <Tabs value={0} textColor="inherit">
                <Tab
                  value={0}
                  label="MOVIE PLOT"
                  sx={{color: '#e6920e', fontSize: '1.2rem'}}
                />
              </Tabs>
            </Box>
            <Box sx={{p: 3, color: 'white', fontSize: '14px'}} role="tabpanel">
              {info.Plot}
            </Box>
          </Box>
        </Grid>
      </div>
    );
  }
}

export default Movie;