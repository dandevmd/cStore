import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './contexts/UserContext.jsx';
import { CategoriesProvider } from './contexts/CategoriesContext.jsx';
import {DropdownProvider} from './contexts/DropdownContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CategoriesProvider>
          <DropdownProvider>
          <App />
          </DropdownProvider>
        </CategoriesProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
