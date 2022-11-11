import React, { useState } from "react";

const Collection = ({
  collection,
  getCardsForCollection,
  openCardContainer,
  setCollectionData,
}) => {
  function handleClick() {
    setCollectionData(collection);
    openCardContainer();
  }

  return <h3 onClick={handleClick}>{collection.title}</h3>;
};

export default Collection;
