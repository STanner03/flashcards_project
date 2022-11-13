import Collection from "./Collection/Collection";
import AddNewCollectionForm from "./AddNewCollectionForm/AddNewCollectionForm";
// import React, { useState } from "react";

const CollectionMenu = ({
  setOpen,
  setOpen2,
  collections,
  addNewCollection,
  openCardContainer,
  setActiveCollectionData,
}) => {
  const allCollections = collections.map((collection, i) => (
    <Collection
      key={i}
      setOpen={setOpen}
      setOpen2={setOpen2}
      collection={collection}
      openCardContainer={openCardContainer}
      setActiveCollectionData={setActiveCollectionData}
    />
  ));

  const handleNewCollection = () => {
      <AddNewCollectionForm addNewCollection={addNewCollection} />
    }

  return (
    <div>
      {allCollections}
      <button className="btn-stl" onClick={handleNewCollection} >Add New Collection</button>
    </div>
  );
};

export default CollectionMenu;
