import React from 'react';

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import './config/reactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';

import { Router } from 'react-router-dom';

import Routes from './routes';

import { store, persistor } from './store';

import history from './services/history';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
export default App;
