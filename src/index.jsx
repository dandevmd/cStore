import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js'

import { stripePromise } from './stripe/Stripe';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);


reportWebVitals();
