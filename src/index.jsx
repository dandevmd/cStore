import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


import { DropdownProvider } from './contexts/DropdownContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <Router>
            <DropdownProvider>
              <App />
            </DropdownProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
