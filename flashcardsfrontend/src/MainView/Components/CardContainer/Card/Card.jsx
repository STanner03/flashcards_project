import React, { useEffect, useState } from "react";
import CreateCardForm from "../CreateCardForm/CreateCardForm";

const Card = ({ i, a, cardData, createNewCard, deleteCard }) => {
  const [display, setDisplay] = useState(cardData.word);

  useEffect(() => {
    setDisplay(cardData.word);
  }, [cardData]);

  function handleClick() {
    if (display === cardData.word) {
      setDisplay(cardData.definition);
    } else {
      setDisplay(cardData.word);
    }
  }

  function handleAddCard() {
    <CreateCardForm createNewCard={createNewCard} title={"Add New Card"} />;
  }

  function handleEditCard() {
    <CreateCardForm cardData={cardData} title={"Edit Card"} />;
  }

  const handleDeleteCard = () => deleteCard();

  return (
    <div onClick={handleClick}>
      <button onClick={handleAddCard}>Add New Card</button>
      <button onClick={handleEditCard}>Edit Card</button>
      <button onClick={handleDeleteCard}>Delete</button>
      <div>{display}</div>
      <a>
        {i} of {a.length}
      </a>
    </div>
  );
};

export default Card;
