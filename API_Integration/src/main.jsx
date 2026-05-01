import React from 'react';
import { createRoot } from 'react-dom/client'; // Notice the "/client"
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);