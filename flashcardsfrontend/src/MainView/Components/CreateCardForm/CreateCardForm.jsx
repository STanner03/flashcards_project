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
    
    return ( 
        <div>
            <input type="text" placeholder='Name of Card' value={name} />
            <input type="text" placeholder='Description of Card' value={definition} />
        </div>
     );
}
 
export default CreateCardForm;