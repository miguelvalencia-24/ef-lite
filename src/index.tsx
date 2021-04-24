import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './helpers/store';

const Root: React.FC = () => {
    const store = configureStore();
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);
