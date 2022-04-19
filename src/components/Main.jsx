import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';

function Main() {
  const { setFilterByName } = useContext(StarWarsContext);

  const handleInput = ({ target }) => {
    setFilterByName(
      {
        filterByName: {
          name: target.value,
        },
      },
    );
  };
  return (
    <main>
      <input
        onChange={ (e) => handleInput(e) }
        data-testid="name-filter"
        type="text"
        placeholder="digite um planeta"
      />
      <Table />
    </main>
  );
}

export default Main;
