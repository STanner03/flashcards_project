import React, { useEffect, useState } from "react";
import "./CreateCardForm.css";

const CreateCardForm = ({
  editCard,
  createNewCard,
  setShowCardForm,
  cardFormTitle,
  activeCardData,
  getCardsForCollection
}) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [placeholder, setPlaceholder] = useState([]);
  const [cardType, setCardType] = useState("")


  useEffect(() => {
    if (cardFormTitle === "New Card") {
      setPlaceholder({
        word: "Word on Card",
        definition: "Description of Word",
      })
      setCardType("New")
    }
    else if (cardFormTitle === "Edit Card") {
      setPlaceholder({
        word: activeCardData.word,
        definition: activeCardData.definition,
      })
      setCardType("Edit")
    };
  }, []);

  function handleSave(e) {
    let newCard = {
      word: word,
      definition: definition,
    };
    if (cardType === "New") {
      createNewCard(newCard);
    }
    else if (cardType === "Edit"){
      editCard(newCard)
    }
    setShowCardForm(false);
    getCardsForCollection();

  }

  const handleWord = (e) => setWord(e.target.value);
  const handleDefinition = (e) => setDefinition(e.target.value);
  const handleCancel = () => setShowCardForm(false);

  return (
    <div className="form-bg">
        <div className="form-body">
          <input
            className="form-input-word"
            type="text"
            placeholder={placeholder.word}
            value={word}
            onChange={handleWord}
          />
          <input
            className="form-input-definition"
            type="text"
            placeholder={placeholder.definition}
            value={definition}
            onChange={handleDefinition}
          />
        </div>
      <div className="form-footer">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default CreateCardForm;
