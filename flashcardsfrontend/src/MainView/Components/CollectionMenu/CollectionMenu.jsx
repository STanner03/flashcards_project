import Collection from "../Collection/Collection";
import AddNewCollectionForm from "../AddNewCollectionForm/AddNewCollectionForm";
import React, { useState } from "react";

const CollectionMenu = ({
  collections,
  setCollections,
  collectionCards,
  openCardContainer,
  setCollectionData,
}) => {
  const allCollections = collections.map((collection) => (
    <Collection
      tempCollectionData={collection}
      collectionCards={collectionCards}
      openCardContainer={openCardContainer}
      setCollectionData={setCollectionData}
    />
  ));

  return (
    <div>
      {allCollections}
      <AddNewCollectionForm setCollections={setCollections} />
    </div>
  );
};

export default CollectionMenu;
