import React, { useEffect, useState } from "react";

const CreateCardForm = ({ createNewCard, setShowCardForm, cardFormTitle, activeCardData }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [placeholder, setPlaceholder] = useState([]);

  useEffect(() => {
    if(cardFormTitle === 'New Card') 
        setPlaceholder({
            word: 'Word on Card',
            definition: 'Description of Word',
    });
    else if(cardFormTitle === 'Edit Card')
        setPlaceholder({
            word: activeCardData.word,
            definition: activeCardData.definition
        });
  }, []);

  function handleSave(e) {
    // e.preventDefault();
    let newCard = {
      word: word,
      definition: definition,
    };
    createNewCard(newCard);
    setShowCardForm(false);
  }

  const handleWord = (e) => setWord(e.target.value);
  const handleDefinition = (e) => setDefinition(e.target.value);
  const handleCancel = () => setShowCardForm(false);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={placeholder.word}
          value={word}
          onChange={handleWord}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={placeholder.definition}
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
