import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthStoreProvider } from './stores/AuthStore/AuthStoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthStoreProvider>
      <App />
    </AuthStoreProvider>
  </React.StrictMode>
);

reportWebVitals();
