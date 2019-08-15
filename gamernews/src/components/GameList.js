import React, { useState } from 'react';
import GameView from './GameView.js'
import axios from 'axios'

function GameList(props){
    const [singleGame, setSingleGameData] = useState([])
    
    const retrieveSingleGame = (e) => {
        let singleGame = e.target.textContent.replace(/ /g, '-')
        axios
        .get(`https://api.rawg.io/api/games/${singleGame}`)
        .then(res => setSingleGameData(res.data))
        .catch(error => error)

        e.preventDefault();
    }

    return(
        <div>
        <GameView singleGameData={singleGame}/>
        <h1>This is game list</h1>
        {props.gameData.map(game => {
            return(
                <div key={game.id}>
                <h3 onClick={retrieveSingleGame}className='gameName'>{game.name}</h3>
                <p>{game.released}</p>
                <img className='game-picture' src={game.background_image} />
                </div>
            )
        })}
        </div>
    )
}

export default GameList;