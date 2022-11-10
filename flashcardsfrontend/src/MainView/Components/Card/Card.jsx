import React, { useState } from 'react';
import CreateCardForm from "../CreateCardForm/CreateCardForm";

const Card = ({cardData, createNewCard}) => {

    function handleClick(){
        
    }

    return ( 
        <div onClick={handleClick}>
            <h4>{cardData.word}</h4>
            <p>{cardData.definition}</p>
            <CreateCardForm createNewCard={createNewCard} />
        </div>
     );
}
 
export default Card;