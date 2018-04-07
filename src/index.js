import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './StoreProvider';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

ReactDOM.render(
  <StoreProvider>
    <App/>
  </StoreProvider>, document.getElementById('root'));
registerServiceWorker();
