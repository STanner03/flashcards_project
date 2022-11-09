import React, { useState } from 'react';

const CreateCardForm = () => {
    
    const [name, setName] = useState('');
    const [definition, setDefinition] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let newCard = {
            name: name,
            definition: definition
        };
        setName("")
        setDefinition("")
    };

    const handleName = e => setName(e.target.value);
    const handleDefinition = e => setDefinition(e.target.value);
    
    return ( 
        <div onClick={handleSubmit}>
            <input type="text" placeholder='Name of Card' value={name} onChange={handleName} />
            <input type="text" placeholder='Description of Card' value={definition} onChange={handleDefinition} />
            <button type="submit">Create Card</button>
        </div>
     );
}
 
export default CreateCardForm;