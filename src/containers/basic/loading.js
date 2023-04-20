import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
class Loading extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading || false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
}
export default Loading;