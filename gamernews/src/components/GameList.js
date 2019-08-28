import React, { useState, useRef } from 'react';
import GameView from './GameView.js';
import axios from 'axios';

function GameList(props){
    const [singleGame, setSingleGameData] = useState({
        data: [],
        isToggleOn: false
    })

    let gameRef = useRef()

    let scrollToGameDetails = () => {
      window.scrollTo({ 
        behavior: 'smooth', 
        top: gameRef.current.offsetTop
      })
    }
    
    const retrieveSingleGame = (e) => {
        e.preventDefault();
        scrollToGameDetails();
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
        <div className='game-details' ref={gameRef}>
            {singleGame.isToggleOn && 
            <GameView 
                singleGameData={singleGame.data}
                 toggleOn={singleGame.isToggleOn}
            />}
        </div>
        {props.gameData.map(game => {
            let date = new Date(game.released).toDateString()
            let releaseDate = date.split(' ').slice(1).join('-')

            return(
                <div key={game.id} className='game-card'>
                {/* <video id="background-video" loop autoPlay>
                    <source src={game.clip.preview} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <h4 onClick={retrieveSingleGame}className='gameName'>{game.name}</h4>
                <img className='game-picture' src={game.background_image} />
                <p><b>Release Date: </b>{releaseDate}</p>
                {console.log(date)}
                <p><b>Rating: </b> {game.rating} / 5</p>
                </div>
            )
        })}
        </div>
    )
}

export default GameList;