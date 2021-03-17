import React, { useState, useCallback, useRef } from 'react';
import * as Yup from 'yup';

import {
  Container,
  Content,
  SearchBar,
  TableContainer,
  Toggle,
} from './styles';

import Navbar from '../../components/Navbar';
import TableLine from '../../components/TableLine';
import Input from '../../components/Input';

import WaveBottom from '../../assets/wave.svg';

import { FiSearch, FiUser, FiMail, FiLock, FiPlusCircle } from 'react-icons/fi';
import { BiListUl, BiPlus } from 'react-icons/bi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import api from '../../services/api';

import UserDTO from '../../dtos/UserDTO';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const Index: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [search, setSearch] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<UserDTO[]>([]);

  const handleSearchSubmit = useCallback(async () => {
    try {
      const result = await api.get(
        '/users' + (search ? `?email=${search}` : ''),
      );

      if (result.status === 200) {
        setSearchResults(result.data);
      }
    } catch (error) {
      setSearchResults([]);
      alert(`${search} was not found`);
    }
  }, [search]);

  const handleCreate = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'A senha deve ter no mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/users', data);

      if (response.status === 200) {
        alert('User created successfully');
        setToggle(false);
      }
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Navbar></Navbar>
      <Content>
        <Toggle toggleState={toggle}>
          <button
            id="list"
            onClick={() => {
              setToggle(false);
            }}
          >
            <BiListUl size={24} />
            <h2>List</h2>
          </button>
          <button
            id="create"
            onClick={() => {
              setToggle(true);
            }}
          >
            <BiPlus size={24} />
            <h2>Create</h2>
          </button>
        </Toggle>

        {!toggle ? (
          <div id="list-inner-content">
            <SearchBar>
              <div>
                <input
                  placeholder="Search for user email"
                  value={search}
                  autoComplete="false"
                  onChange={(
                    value: React.ChangeEvent<HTMLInputElement>,
                  ): void => {
                    setSearch(value.target.value);
                  }}
                />
              </div>
              <a href="#" onClick={handleSearchSubmit}>
                <FiSearch size={25} />
              </a>
            </SearchBar>

            <TableLine
              bgColor={'#053152'}
              fontColor={'#FFF'}
              fontSize={'1.125rem'}
              info={{ id: 'ID', name: 'Name', email: 'Email' }}
            ></TableLine>
            <TableContainer>
              {searchResults.length &&
                searchResults.map(element => (
                  <TableLine
                    border={'1px solid #b3bec8'}
                    bgColor={'#dee9f2'}
                    fontColor={'#515151'}
                    fontSize={'0.875rem'}
                    key={element.id}
                    info={element}
                  ></TableLine>
                ))}
            </TableContainer>
          </div>
        ) : (
          <div id="create-inner-content">
            <h2>Create a new user</h2>
            <Form ref={formRef} onSubmit={handleCreate}>
              <Input icon={FiUser} name="name" placeholder="Name" />
              <Input icon={FiMail} name="email" placeholder="Email" />
              <Input
                icon={FiLock}
                name="password"
                type="password"
                placeholder="Password"
              />
              <button type="submit">
                <h2>Create</h2>
                <FiPlusCircle size={24} />
              </button>
            </Form>
          </div>
        )}
      </Content>
      <img src={WaveBottom} alt="BackgroundWave" />
    </Container>
  );
};

export default Index;
