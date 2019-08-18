import React from 'react';

function GameView(props){
    return(
        <>  
        {console.log(props.singleGameData)}
        <h1>{props.singleGameData.name}</h1>
        {props.singleGameData.description_raw}
        </>
    )
}

export default GameView;