import React, {Fragment} from "react";
import {Router, Route, Switch} from "react-router-dom"
import CMovies from "../../ccontainers/cpages/cmovies";
import CPageContainer from "../../ccontainers/cbasic/cpage-container";
import history from './history';

const Pages = () => {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <CPageContainer>
            <Route exact path="/" component={CMovies}/>
          </CPageContainer>
        </Switch>
      </Router>
    </Fragment>
  )
};
export default Pages;