import React, { useState } from 'react';
import CardContainer from "./Components/CardContainer/CardContainer";
import CollectionMenu from "./Components/CollectionMenu/CollectionMenu";

const MainView = ({collections, setCollections, cards, collectionCards, setCards}) => {


  return (
    <div>
      <CollectionMenu collections={collections} setCollections={setCollections} collectionCards={collectionCards} />
      <CardContainer collectionCards={collectionCards} />
    </div>
  );
};

export default MainView;
