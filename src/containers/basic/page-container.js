import React, {Fragment} from 'react';
import CLoading from "../../ccontainers/cbasic/cloading";
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  display: 'line-flex',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    display: 'line-flex'
  },
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        cursor: 'pointer'
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  display: 'line-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
}));

class PageContainer extends React.Component {
  render() {
    return (
      <Fragment>
        {this.header()}
        <CLoading/>
        <Container className="container-page">
          {this.props.children}
        </Container>
      </Fragment>
    );
  }

  header = () => {
    const {onChangeSearch, filter, onChangeFilter, history, location} = this.props;
    const {pathname} = location;
    return (
      <div className="header-page">
        <AppBar position="fixed">
          <Container className="p-0">
            <Toolbar>
              <IconButton
                className='cursor-pointer'
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick = {() => history.push('/')}
              >
                <MenuIcon/>
              </IconButton>
              <Typography
                className='cursor-pointer'
                variant="h6"
                noWrap
                component="div"
                onClick = {() => history.push('/')}
                sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
              >
                PHIM NEW
              </Typography>
              <Search style={{display: "line-flex"}}>
                <SearchIconWrapper>
                  <SearchIcon onClick={() => onChangeSearch(filter.search, pathname, history)}/>
                </SearchIconWrapper>
                <StyledInputBase
                  value={filter.search || ''}
                  placeholder="Search…"
                  inputProps={{'aria-label': 'search'}}
                  onChange={(e) => onChangeFilter(e.target.value)}
                  onKeyDown={e => {
                    if (e.keyCode === 13) onChangeSearch(e.target.value, pathname, history)
                  }}
                />
              </Search>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    )
  }
}

export default PageContainer;