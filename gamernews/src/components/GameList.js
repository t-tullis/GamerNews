import React, { useState } from 'react';
import GameView from './GameView.js';
import axios from 'axios';

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
        <div className='game-list'>
        {singleGame.isToggleOn && 
        <GameView 
        singleGameData={singleGame.data}
        toggleOn={singleGame.isToggleOn}
        />}
        {props.gameData.map(game => {
            return(
                <div key={game.id}>
                {/* <video id="background-video" loop autoPlay>
                    <source src={game.clip.preview} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <h4 onClick={retrieveSingleGame}className='gameName'>{game.name}</h4>
                <img className='game-picture' src={game.background_image} />
                <p>{game.released}</p>
                <p>Rating: {game.rating} / 5</p>
                </div>
            )
        })}
        </div>
    )
}

export default GameList;