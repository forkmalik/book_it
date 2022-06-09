import React from 'react';
import { createRoot } from 'react-dom/client';
import {compose, createStore} from "redux";
import { Provider } from 'react-redux';
import './index.css';
import App from './js/App';
import reportWebVitals from './js/reportWebVitals';
import {rootReducer} from "./js/redux/rootReducer";

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
