import React, { useState, useCallback } from 'react';

import {
  Container,
  Content,
  SearchBar,
  TableContainer,
  Toggle,
} from './styles';
import Navbar from '../../components/Navbar';
import TableLine from '../../components/TableLine';
import WaveBottom from '../../assets/wave.svg';
import { FiSearch } from 'react-icons/fi';
import { BiListUl, BiPlus } from 'react-icons/bi';

const List: React.FC = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [search, setSearch] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  const handleSearchSubmit = useCallback(() => {
    console.log(search);
  }, [search]);

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
                  placeholder="Digite o email do usuário"
                  value={search}
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
            ></TableLine>
            <TableContainer>
              {array.map(element => (
                <TableLine
                  border={'1px solid #b3bec8'}
                  bgColor={'#dee9f2'}
                  fontColor={'#515151'}
                  fontSize={'0.875rem'}
                  key={element.toString()}
                ></TableLine>
              ))}
            </TableContainer>
          </div>
        ) : (
          <div id="create-inner-content">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </Content>
      <img src={WaveBottom} alt="BackgroundWave" />
    </Container>
  );
};

export default List;
