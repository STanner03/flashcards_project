import React, { useState } from 'react';
import CreateCardForm from "../CreateCardForm/CreateCardForm";

const Card = ({cardData, createNewCard}) => {

    const [display, setDisplay] = useState(cardData.word)

    function handleClick(){
        if (display === cardData.word) {
            setDisplay(cardData.definition)
        } else {
            setDisplay(cardData.word)
        }
    };

    function handleAddCard(){
        <CreateCardForm createNewCard={createNewCard} />
    }

    function handleEditCard() {
        <CreateCardForm cardData={cardData} />
        
    }

    return ( 
        <div onClick={handleClick}>
            <button onClick={handleAddCard} >Add New Card</button>
            <button onClick={handleEditCard} >Edit Card</button>
            <div>{display}</div>
        </div>
     );
}
 
export default Card;