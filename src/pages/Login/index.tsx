import React, { useCallback, useRef } from 'react';

import { Container } from './styles';

import Input from '../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiUser, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      signIn(data);
    },
    [signIn],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Login as Admin</h1>
        <Input icon={FiUser} name="email" type="email" placeholder="Email" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

export default Login;
