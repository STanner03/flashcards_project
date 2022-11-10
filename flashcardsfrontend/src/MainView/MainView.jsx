import React, { useState } from 'react';
import CardContainer from "./Components/CardContainer/CardContainer";
import CollectionMenu from "./Components/CollectionMenu/CollectionMenu";

const MainView = ({collections, setCollections, cards, collectionCards, setCards}) => {

    function openCardContainer(){
        <CardContainer cards={cards} />
    }

  return (
    <div>
      <CollectionMenu collections={collections} setCollections={setCollections} collectionCards={collectionCards} openCardContainer={openCardContainer} />
        <CardContainer cards={cards} />
    </div>
  );
};

export default MainView;
