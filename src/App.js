import React from 'react';
import { Router } from './routes/Router';
import GlobalStyle from './styles/global';
import GlobalState from './components/global/GlobalState'

import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
