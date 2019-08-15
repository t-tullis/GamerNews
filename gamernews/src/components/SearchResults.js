import React, {useState, useEffect} from 'react';
import GameView from './GameView.js'
import GameList from './GameList.js'
import axios from 'axios'
import '../App.css'

function SearchResults(){
    const [gameData,  setGameData] = useState({
        gameSearch: '',
        gameResults: []
      })


      useEffect( () => {
          axios
          .get(`https://api.rawg.io/api/games?page_size=10`)
          .then(res => setGameData({gameResults: res.data.results}))
          .catch(error => error)   
        }, [])
    
    const onSearchChange = (e) => {
        gameData.gameSearch = {gameSearch: e.target.value }
      }
    
      const onSearchSubmit = (e) => {
        const { gameSearch } = gameData.gameSearch
        retrieveSearchedGames(gameSearch)
        e.preventDefault()
      }

      const retrieveSearchedGames = (gameSearch) => {
              axios
              .get(`https://api.rawg.io/api/games?page_size=10&search=${gameSearch}`)
              .then(res => setGameData({gameResults: res.data.results}))
              .catch(error => error)
          }


      return(
        <div>
        <h1> Search Results component</h1>
                <form onSubmit = {onSearchSubmit}>
                    <input
                    type='text'
                    value={gameData.gameSearch}
                    onChange={onSearchChange}
                    placeholder='Search game....'
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
        <GameList gameData={gameData.gameResults} />
        </div>
    )
}

export default SearchResults;