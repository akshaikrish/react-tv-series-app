import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';

// const getDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

// const greeting = <h1>Welcome to Mechanix. Find your beast suitable mechanic nearby...Today is {getDate()}</h1>;
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <React.StrictMode>
    
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
