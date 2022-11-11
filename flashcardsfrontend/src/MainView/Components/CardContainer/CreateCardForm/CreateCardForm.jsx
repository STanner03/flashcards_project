import React, { useState } from "react";
import Modal from "../../Modal/Modal.jsx";

const createCardTemplate = {
  word: "",
  definition: "",
};

const CreateCardForm = ({ createNewCard, setShowCardForm }) => {
  const [word, setWord] = useState(createNewCard.word);
  const [definition, setDefinition] = useState(createNewCard.definition);

  function handleSave(e) {
    // e.preventDefault();
    let newCard = {
      word: word,
      definition: definition,
    };
    createNewCard(newCard);
    setShowCardForm(false);
    // setWord("");
    // setDefinition("");
  }

  const handleWord = (e) => setWord(e.target.value);
  const handleDefinition = (e) => setDefinition(e.target.value);
  const handleCancel = () => setShowCardForm(false);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Word on Card"
          value={word}
          onChange={handleWord}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description of Word"
          value={definition}
          onChange={handleDefinition}
        />
      </div>
      <div>
        <button onClick={handleCancel} >Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default CreateCardForm;
