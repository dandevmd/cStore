import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
              <App />
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
