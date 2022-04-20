import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setFilterByNumericValues, filterByNumericValues } = useContext(StarWarsContext);

  const [filters, setFilters] = useState({
    column: '',
    comparison: 'maior que',
    value: 0,
  });

  const [columns, setColumns] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const handleColumnsOptions = (() => {
    const result = columns
      .filter((option) => filterByNumericValues
        .every(({ column }) => option !== column));
    setColumns(result);
  });

  useEffect(() => {
    handleColumnsOptions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  const addFilter = () => {
    setFilterByNumericValues([
      ...filterByNumericValues, filters,
    ]);
  };

  const showFilter = () => {
    const filter = filterByNumericValues.map(({ column, comparison, value }) => (
      <p key={ Math.random() }>{`${column} ${comparison} ${value}`}</p>
    ));
    return filter;
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
          value={ filters.column }
        >
          { columns
            .map((option) => (
              <option
                value={ option }
                key={ Math
                  .random() }
              >
                {option}
              </option>
            )) }
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
      <div>
        { showFilter() }
      </div>
    </div>
  );
}

export default Filters;
