import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
// import apiResult from './apiResult.json';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      // const { results } = apiResult;
      setData(results);
    };
    fetchApi();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
