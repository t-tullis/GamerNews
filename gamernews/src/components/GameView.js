import React from 'react';
import GameList from './GameList.js'
import '../App.css'

function GameView(props){
    return(
        <div className='game-view'>  
        {console.log(props.singleGameData)}
        <h1>{props.singleGameData.name}</h1>
        {props.singleGameData.description_raw}
        <p><b>Metacritic Rating:</b> {props.singleGameData.metacritic}</p>
        <h4>Genres</h4>
        <div className='game-genres'>
            {props.singleGameData.genres.map(genre => {
                return(
                    <p key={genre.id}>{genre.name}</p>
                )
            })}
            </div>
        <h4>Platforms</h4>
        <div className='platforms'>
            {props.singleGameData.platforms.map(platform => {
                return(
                    <p key={platform.platform.id}>{platform.platform.name}</p>
                )
            })}

        </div>
            <a href={props.singleGameData.website}>{props.singleGameData.website}</a>
        </div>
    )
}

export default GameView;