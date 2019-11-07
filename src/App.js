import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import Routes from './routes';

function App() {
  return (
      <Provider store={store}>
      <React.Fragment>
        <ToastContainer enableMultiContainer containerId="A" />
        <Routes />
      </React.Fragment>
    </Provider>
  );
}

export default App;
