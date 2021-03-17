import React from 'react';
import { Container, UserLogged } from './styles';
import { FiUser } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';

import SpringFrameworkLogo from '../../assets/spring-framework-logo.png';

const Navbar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <div id="logo">
        <img src={SpringFrameworkLogo} alt="Logo" />
        <h1>Spring Crud</h1>
      </div>

      <UserLogged onClick={signOut}>
        <FiUser size={24} />
      </UserLogged>
    </Container>
  );
};

export default Navbar;
