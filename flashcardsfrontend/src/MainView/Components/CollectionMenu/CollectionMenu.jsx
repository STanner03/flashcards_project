import Collection from "./Collection/Collection";
import AddNewCollectionForm from "./AddNewCollectionForm/AddNewCollectionForm";
import React, { useState } from "react";

const CollectionMenu = ({
  collections,
  addNewCollection,
  getCardsForCollection,
  openCardContainer,
  setCollectionData,
}) => {
  const allCollections = collections.map((collection, i) => (
    <Collection
      key={i}
      collection={collection}
      getCardsForCollection={getCardsForCollection}
      openCardContainer={openCardContainer}
      setCollectionData={setCollectionData}
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
