import React, { useCallback } from 'react';

import { Container } from './styles';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import UserDTO from '../../dtos/UserDTO';

import { useAuth } from '../../hooks/AuthContext';

import api from '../../services/api';

import { useHistory } from 'react-router-dom';

interface TableLineProps {
  bgColor: string;
  fontSize: string;
  fontColor: string;
  border?: string;
  info: UserDTO;
}

interface UpdateFormData {
  name: string;
  email: string;
}

const TableLine: React.FC<TableLineProps> = ({
  bgColor,
  fontSize,
  fontColor,
  border,
  info,
}) => {
  const { token, signOut } = useAuth();
  const history = useHistory();

  const handleEdit = useCallback(() => {
    history.push({
      pathname: `/update/${info.id}`,
      state: {
        info: info,
      },
    });
  }, [history, info]);

  const handleRemove = useCallback(async () => {
    try {
      await api.delete('/users/' + info.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Successfully deleted user ' + info.id);
      window.location.reload();
    } catch (error) {
      alert('Token expired.');
      signOut();
      history.push('/login');
    }
  }, [history, info.id, signOut, token]);

  return (
    <Container
      bg_color={bgColor}
      font_size={fontSize}
      font_color={fontColor}
      border={border}
    >
      <div className="column">
        <h2>{info.id}</h2>
      </div>
      <div className="column">
        <h2>{info.name}</h2>
      </div>
      <div className="column">
        <h2>{info.email}</h2>
      </div>
      {info.id != 'ID' && (
        <div className="buttons">
          <FiEdit size={16} color={'#8A2EFF'} onClick={handleEdit} />
          <FiTrash2 size={16} color={'#DE4447'} onClick={handleRemove} />
        </div>
      )}
    </Container>
  );
};

export default TableLine;
