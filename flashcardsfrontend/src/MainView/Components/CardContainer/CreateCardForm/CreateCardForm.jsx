import React, { useState } from "react";
import Modal from "../../Modal/Modal.jsx";

const createCardTemplate = {
    word: '',
    definition: '',
};

const CreateCardForm = ({ createNewCard, title }) => {
  const [word, setWord] = useState(createNewCard.word);
  const [definition, setDefinition] = useState(createNewCard.definition);

  function handleSubmit(e) {
    e.preventDefault();
    let newCard = {
      word: word,
      definition: definition,
    };
    createNewCard(newCard);
    setWord("");
    setDefinition("");
  }

  const handleWord = (e) => setWord(e.target.value);
  const handleDefinition = (e) => setDefinition(e.target.value);

  return (
    <Modal title={title} onClose={onClose}>
      <div onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Word on Card"
          value={word}
          onChange={handleWord}
        />
        <input
          type="text"
          placeholder="Description of Word"
          value={definition}
          onChange={handleDefinition}
        />
        <button type="submit">Create Card</button>
      </div>
    </Modal>
  );
};

export default CreateCardForm;
