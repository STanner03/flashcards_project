import React, { useState } from 'react';

const CreateCardForm = ({createNewCard}) => {
    
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let newCard = {
            word: word,
            definition: definition
        };
        createNewCard(newCard)
        setWord("")
        setDefinition("")
    };

    const handleWord = e => setWord(e.target.value);
    const handleDefinition = e => setDefinition(e.target.value);
    
    return ( 
        <div onSubmit={handleSubmit}>
            <input type="text" placeholder='Word on Card' value={word} onChange={handleWord} />
            <input type="text" placeholder='Description of Word' value={definition} onChange={handleDefinition} />
            <button type="submit">Create Card</button>
        </div>
     );
}
 
export default CreateCardForm;