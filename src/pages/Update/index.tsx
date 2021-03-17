import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from 'components/Input';
import { useAuth } from 'hooks/AuthContext';
import React, { useCallback, useRef } from 'react';
import { FiMail, FiUser } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import api from 'services/api';

import { Container } from './styles';

interface Info {
  info: {
    id: string;
    name: string;
    email: string;
  };
}

interface UpdateFormData {
  name: string;
  email: string;
}

const Update: React.FC = () => {
  const { state } = useLocation<Info>();
  const info = state.info;
  const formRef = useRef<FormHandles>(null);
  const { token, signOut } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: UpdateFormData) => {
      try {
        await api.put('/users/' + info.id, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Successfully updated user ' + info.id);
        history.push('/index');
      } catch (error) {
        alert('Token expired.');
        signOut();
        history.push('/login');
      }
    },
    [history, info.id, signOut, token],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h3 className="title">User.id:</h3>
        <h3>{info.id}</h3>
        <h3 className="title">User.name:</h3>
        <h3>{info.name}</h3>
        <h3 className="title">User.email:</h3>
        <h3>{info.email}</h3>
        <Input icon={FiUser} name="name" placeholder="Name" />
        <Input icon={FiMail} name="email" type="email" placeholder="Email" />
        <button type="submit">Update</button>
      </Form>
    </Container>
  );
};

export default Update;
