import React, {Fragment} from "react";
import {Router, Route, Switch} from "react-router-dom"
import CMovies from "../../ccontainers/cpages/cmovies";
import CMovie from "../../ccontainers/cpages/cmovie";
import CPageContainer from "../../ccontainers/cbasic/cpage-container";
import history from './history';

const Pages = () => {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <CPageContainer history={history}>
            <Route exact path="/" component={CMovies}/>
            <Route exact path="/:imdbID" component={CMovie}/>
          </CPageContainer>
        </Switch>
      </Router>
    </Fragment>
  )
};
export default Pages;