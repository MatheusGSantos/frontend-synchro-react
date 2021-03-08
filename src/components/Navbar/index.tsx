import React from 'react';
import { Container, UserLogged } from './styles';
import { FiUser } from 'react-icons/fi';

import SpringFrameworkLogo from '../../assets/spring-framework-logo.png';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div id="logo">
        <img src={SpringFrameworkLogo} alt="Logo" />
        <h1>Spring Crud</h1>
      </div>

      <UserLogged href="#">
        <FiUser size={24} />
      </UserLogged>
    </Container>
  );
};

export default Navbar;
