import React, {useState, useEffect} from 'react';
import SearchResults from './components/SearchResults.js'
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Gamer News</h1>
      <SearchResults/>
    </div>
  );
}

export default App;
