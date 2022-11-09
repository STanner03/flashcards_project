import { useState } from "react";

const AddNewCollectionForm = ({setCollections}) => {

    const [title, setTitle] = useState('');

    const handleTitle = e => setTitle(e.target.value);

    // const handleSubmit = e => setCollections({title: title})

    function handleSubmit(e){
        e.preventDefault();
        let newCollection ={
            title: title
        };
        setCollections(newCollection)
        setTitle("")
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={handleTitle} />
            <button type="submit">Create Collection</button>
        </form>
     );
}
 
export default AddNewCollectionForm;