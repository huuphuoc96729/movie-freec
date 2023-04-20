import React from 'react';

class Movies extends React.Component {
  componentDidMount() {
    this.props.onInit();
  }
  render() {
    return (
      <h4 className="text-center pt-5">Movies list</h4>
    );
  }
}

export default Movies;