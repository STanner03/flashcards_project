import React, { useEffect, useState } from 'react';
import CreateCardForm from "../CreateCardForm/CreateCardForm";

const Card = ({i, a, cardData, createNewCard}) => {

    const [display, setDisplay] = useState(cardData.word)

    useEffect(() => {
        setDisplay(cardData.word);
    }, [])

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
            <a>{i} of {a.length}</a>
        </div>
     );
}
 
export default Card;