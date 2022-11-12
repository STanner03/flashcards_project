import Collection from "./Collection/Collection";
import AddNewCollectionForm from "./AddNewCollectionForm/AddNewCollectionForm";
// import React, { useState } from "react";

const CollectionMenu = ({
  collections,
  addNewCollection,
  openCardContainer,
  setActiveCollectionData,
}) => {
  const allCollections = collections.map((collection, i) => (
    <Collection
      key={i}
      collection={collection}
      openCardContainer={openCardContainer}
      setActiveCollectionData={setActiveCollectionData}
    />
  ));

  return (
    <div>
      {allCollections}
      <AddNewCollectionForm addNewCollection={addNewCollection} />
    </div>
  );
};

export default CollectionMenu;
