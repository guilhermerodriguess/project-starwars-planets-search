import React from 'react';
import './App.css';
import Main from './components/Main';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Main />
    </StarWarsProvider>
  );
}

export default App;
