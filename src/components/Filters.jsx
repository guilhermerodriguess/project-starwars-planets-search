import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setFilterByNumericValues, filterByNumericValues } = useContext(StarWarsContext);

  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const addFilter = () => {
    setFilterByNumericValues([
      ...filterByNumericValues, filters,
    ]);
  };

  return (
    <div>
      <label htmlFor="coluna">
        Coluna
        <select
          onChange={ ({ target }) => setFilters(
            { ...filters, column: target.value },
          ) }
          id="coluna"
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="operador">
        Operador
        <select
          onChange={ ({ target }) => setFilters(
            { ...filters, comparison: target.value },
          ) }
          id="operador"
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        onChange={ ({ target }) => setFilters(
          { ...filters, value: target.value },
        ) }
        type="number"
        data-testid="value-filter"
        value={ filters.value }
      />
      <button
        onClick={ () => addFilter() }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
