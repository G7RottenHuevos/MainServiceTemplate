import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import './index.css';
import '../src/styles/App.scss';
import { ItemProvider } from '../src/Component/itemContext.jsx';

ReactDOM.render(
  // <React.StrictMode>
  <ItemProvider>
    <App />
  </ItemProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
