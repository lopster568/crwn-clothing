import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);