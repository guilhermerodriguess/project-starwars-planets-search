import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    filterByNumericValues,
    filterByName: { name: nome } } = useContext(StarWarsContext);

  const [planetsFiltereds, setPlanetsFiltereds] = useState([]);

  useEffect(() => {
    setPlanetsFiltereds(data);
  }, [data]);

  const allPlanets = (result) => (result.map((
    { name,
      rotation_period: rotation,
      orbital_period: orbital,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water: surface,
      population,
      films,
      created,
      edited,
      url,
    },
  ) => (
    <tr key={ Math.random() }>
      <td>{name}</td>
      <td>{rotation}</td>
      <td>{orbital}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{surface}</td>
      <td>{population}</td>
      <td>{films}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{url}</td>
    </tr>
  ))
  );

  const filterByName = (planets) => {
    const result = planets
      .filter((planet) => planet.name.toLowerCase()
        .includes(nome.toLowerCase()));
    return allPlanets(result);
  };

  const filters = (planets) => {
    if (nome.length > 0) {
      return filterByName(planets);
    }
    return allPlanets(planets);
  };

  useEffect(() => {
    filterByNumericValues.map(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        if (filterByNumericValues.length > 2) {
          const result = planetsFiltereds
            .filter((planet) => Number(planet[column]) > Number(value));
          return setPlanetsFiltereds(result);
        }
        const result = data.filter((planet) => Number(planet[column]) > Number(value));
        return setPlanetsFiltereds(result);
      }
      if (comparison === 'menor que') {
        if (filterByNumericValues.length > 2) {
          const result = planetsFiltereds
            .filter((planet) => Number(planet[column]) > Number(value));
          return setPlanetsFiltereds(result);
        }
        const result = data.filter((planet) => Number(planet[column]) < Number(value));
        return setPlanetsFiltereds(result);
      }
      if (comparison === 'igual a') {
        if (filterByNumericValues.length > 2) {
          const result = planetsFiltereds
            .filter((planet) => Number(planet[column]) > Number(value));
          return setPlanetsFiltereds(result);
        }
        const result = data.filter((planet) => Number(planet[column]) === Number(value));
        return setPlanetsFiltereds(result);
      }
      return setPlanetsFiltereds(planetsFiltereds);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { filters(planetsFiltereds) }
      </tbody>
    </table>
  );
}

export default Table;
