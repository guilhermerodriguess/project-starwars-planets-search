import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data, filterByName: { filterByName: { name: nome } } } = useContext(StarWarsContext);

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
    <tr key={ name }>
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
        { filters(data) }
      </tbody>
    </table>
  );
}

export default Table;
