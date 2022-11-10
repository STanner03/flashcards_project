import React, { useState } from "react";

const Collection = ({
  tempCollectionData,
  collectionCards,
  openCardContainer,
  setCollectionData,
}) => {
  function handleClick() {
    // collectionCards(tempCollectionData.id);
    setCollectionData(tempCollectionData);
    // openCardContainer()
  }
  // console.log(collection)

  return (
    <h3 onClick={handleClick}>
      {tempCollectionData.id}
      {tempCollectionData.title}
    </h3>
  );
};

export default Collection;
