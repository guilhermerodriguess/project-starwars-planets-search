import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Filters from './Filters';
import Table from './Table';

function Main() {
  const { setFilterByName } = useContext(StarWarsContext);

  const handleInput = ({ target }) => {
    setFilterByName({ name: target.value });
  };
  return (
    <main>
      <input
        onChange={ (e) => handleInput(e) }
        data-testid="name-filter"
        type="text"
        placeholder="digite um planeta"
      />
      <Filters />
      <Table />
    </main>
  );
}

export default Main;
