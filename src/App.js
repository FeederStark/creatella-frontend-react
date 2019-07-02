import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';
import { GlobalStyle } from './styles/global';
import Main from './components/Main';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Main />
    <ToastContainer autoclose={5000} />
  </Provider>
);

export default App;
