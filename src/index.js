import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducer from "./reducers/index";
import Pages from "./containers/pages/index";
import '../src/assets/scss/common.scss';
import '../src/assets/scss/index.scss';

const store = createStore(reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Pages/>
    </Provider>
  </React.StrictMode>
);
