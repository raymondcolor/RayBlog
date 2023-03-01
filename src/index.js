import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from './context/AuthContextProvider';
import {BlogContextProvider} from './context/BlogContextProvider';
import {LogOutModalContextProvider} from './context/LogOutModalContextProvider';
import {SearchContextProvider} from './context/SearchContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <LogOutModalContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </LogOutModalContextProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);

reportWebVitals();
