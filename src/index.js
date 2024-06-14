import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/app';
import reportWebVitals from './reportWebVitals';

import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);


/*
  TODO: validate enviroment here. Pruduction builds shouldn't use report web vitals.
*/
reportWebVitals(console.log);
