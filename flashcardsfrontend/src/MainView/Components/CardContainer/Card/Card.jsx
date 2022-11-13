import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({
  i,
  a,
  cardData,
  setShowCardForm,
  setCardFormTitle,
  setActiveCardData,
  getCardsForCollection,
}) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(cardData.word);
    setActiveCardData(cardData);
  }, [cardData]);

  function handleClick() {
    if (display === cardData.word) {
      setDisplay(cardData.definition);
    } else {
      setDisplay(cardData.word);
    }
  }

  function handleEditCard() {
    setShowCardForm(true);
    setCardFormTitle("Edit Card");
  }

  function handleDeleteCard() {
    async function deleteCard() {
      let response = await axios.delete(
        "http://127.0.0.1:8000/api/collections/" + 5 + "/cards/" + 10 + "/"
      );
      getCardsForCollection();    
    }
  }

  return (
    <div>
      <button onClick={handleEditCard}>Edit Card</button>
      <button onClick={handleDeleteCard}>Delete</button>
      <div onClick={handleClick}>
        {display}
        <div>
          {i} of {a.length}
        </div>
      </div>
    </div>
  );
};

export default Card;
