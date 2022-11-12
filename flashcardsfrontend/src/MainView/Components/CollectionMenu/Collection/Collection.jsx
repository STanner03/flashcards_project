// import React, { useState } from "react";

const Collection = ({
  collection,
  openCardContainer,
  setActiveCollectionData,
}) => {
  function handleClick() {
    setActiveCollectionData(collection);
    // openCardContainer();
  }

  return <h3 onClick={handleClick}>{collection.title}</h3>;
};

export default Collection;
