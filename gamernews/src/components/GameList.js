import React, { useState } from 'react';
import GameView from './GameView.js';
import axios from 'axios';
import Loader from 'react-loader-spinner';

function GameList(props){
    const [singleGame, setSingleGameData] = useState({
        data: [],
        isToggleOn: false
    })
    
    const retrieveSingleGame = (e) => {
        e.preventDefault();
        //Regex to replace : and whitespace
        let gameWithHyphen = e.target.textContent.replace(/:/g, '')
        let singleGameSearch = gameWithHyphen.replace(/ /g, '-')
        //axios request to get data on clcik
        axios
        .get(`https://api.rawg.io/api/games/${singleGameSearch}`)
        .then(res => setSingleGameData({
            data: res.data, 
            isToggleOn:  !singleGame.isToggleOn}))
        .catch(error => error)
    }

    
    return(
        <div>
        <h1>This is game list</h1>
        {singleGame.isToggleOn && 
        <GameView 
        singleGameData={singleGame.data}
        toggleOn={singleGame.isToggleOn}
        />}
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