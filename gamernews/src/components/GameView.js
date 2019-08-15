import React, { useState } from 'react'
import axios from 'axios'

function GameView(props){
    return(
        <>  
        <h1>Game View</h1>
        {console.log(props.singleGameData)}
        <h3>{props.singleGameData.name}</h3>
        {props.singleGameData.description_raw}
        </>
    )
}

export default GameView;