import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import Toaster from './components/toaster';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
);
