import React from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardMovie from "../../components/cardMoive";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movie_type: 'all'
    }
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const {list, filter, onChangePaging, onChangeType} = this.props;
    if (!filter) return null;

    const html_no_found = (
      <p className="no-found align-self-center">
        <em> No search result found !</em>
      </p>
    );

    if ((!list.length && !filter.existed) || !filter.s) return html_no_found;

    return (
      <div className="movies movies-list">
        <div className="w-100 text-center pt-4 pb-4">
          <Select
            sx={{width: '50%', backgroundColor: 'white'}}
            size="small"
            value={filter.type || 'all'}
            onChange={(e) => onChangeType(e.target.value)}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'movie'}>Movie</MenuItem>
            <MenuItem value={'series'}>Series</MenuItem>
            <MenuItem value={'episode'}>Episode</MenuItem>
          </Select>
        </div>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {list.length ? list.map(data => {
            const {imdbID} = data;
            return (
              <Grid key={imdbID} item xs={6} sm={4} md={3} lg={2} xl={2} className="position-relative">
                <CardMovie data={data}/>
              </Grid>
            )
          }) : (
            html_no_found
          )}
        </Grid>

        {filter.total_page ? (
          <div className="w-100 pt-4 pb-4">
            <Pagination
              page={parseInt(filter.page || 1)}
              count={filter.total_page || 1}
              variant="outlined" shape="rounded"
              className="d-flex justify-content-center"
              onChange={(e, value) => onChangePaging(value)}
            />
          </div>
        ) : null}

      </div>
    );
  }
}

export default Movies;