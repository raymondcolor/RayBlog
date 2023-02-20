import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from './context/AuthContextProvider';
import {LogOutModalContextProvider} from './context/LogOutModalContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LogOutModalContextProvider>
        <App />
      </LogOutModalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);

reportWebVitals();
