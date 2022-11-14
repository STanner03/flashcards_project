import React, { useEffect, useState } from "react";
import "./Card.css";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

const Card = ({
  i,
  a,
  setShow,
  cardData,
  setFileType,
  setShowCardForm,
  setCardFormTitle,
  setActiveCardData,
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
    setShowCardForm(true);
    setShow(false);
    setFileType("card")

  }

  return (
    <div onClick={handleClick}>
      <div className="card-container">
        <div className="card-header">
          <EditTwoToneIcon className="card-edit-btn" onClick={handleEditCard} />
          <DeleteForeverTwoToneIcon
            className="card-edit-btn"
            onClick={handleDeleteCard}
          />
        </div>
        <div className="card-content">{display}</div>
        <div className="card_index">
          {i} of {a.length}
        </div>
      </div>
    </div>
  );
};

export default Card;
