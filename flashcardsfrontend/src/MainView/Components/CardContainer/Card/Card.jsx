import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateCardForm from "../CreateCardForm/CreateCardForm";

const Card = ({ i, a, cardData, setShowCardForm, setCardFormTitle }) => {
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
    setShowCardForm(true)
    setCardFormTitle('New Card')
  }

  function handleEditCard() {
    <CreateCardForm cardData={cardData} title={"Edit Card"} />;
  }

  function handleDeleteCard() {
    async function deleteCard() {
      let alteredCardList = await axios.delete(
        "http://127.0.0.1:8000/api/collections/" + 5 + "/cards/" + 11 + "/"
      );
    }
  }

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
