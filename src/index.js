import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import {createStore} from "redux";
import reducer from "./reducers/index";
import Pages from "./containers/pages/index";
import '../src/assets/scss/common.scss';
import '../src/assets/scss/index.scss';
let store = createStore(reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Pages />
  </Provider>,
  document.getElementById("root")
);


// const container = document.getElementById('root');
// const root = createRoot(container);
//
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Pages/>
//     </Provider>
//   </React.StrictMode>