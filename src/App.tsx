import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { AuthProvider } from './hooks/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>

    <GlobalStyle />
  </>
);

export default App;
