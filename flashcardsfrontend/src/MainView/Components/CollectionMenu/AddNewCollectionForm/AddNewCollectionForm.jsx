import { useState } from "react";

const collectionTemplate = {
    title: '',
};

const AddNewCollectionForm = ({ addNewCollection }) => {
  const [title, setTitle] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    let newCollection = {
      title: title,
    };
    addNewCollection(newCollection);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Collection Title"
        value={title}
        onChange={handleTitle}
      />
      <button type="submit">Create Collection</button>
    </form>
  );
};

export default AddNewCollectionForm;
