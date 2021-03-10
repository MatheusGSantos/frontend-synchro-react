import React from 'react';

import GlobalStyle from './styles/global';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import Index from './pages/Index';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Index />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
