import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from './context/AuthContextProvider';
import {BlogContextProvider} from './context/BlogContextProvider';
import {LogOutModalContextProvider} from './context/LogOutModalContextProvider';
import {SearchContextProvider} from './context/SearchContextProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <BlogContextProvider>
          <LogOutModalContextProvider>
            <SearchContextProvider>
              <App />
            </SearchContextProvider>
          </LogOutModalContextProvider>
        </BlogContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
