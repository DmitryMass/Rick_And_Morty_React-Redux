import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './Components/App';
import store from './Storage/store';
//
import './styles/allreset.css';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
