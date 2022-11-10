import React, { useState } from 'react';
import CardContainer from "./Components/CardContainer/CardContainer";
import CollectionMenu from "./Components/CollectionMenu/CollectionMenu";

const MainView = ({collections, setCollections, cards, collectionCards, createNewCard, setCollectionData}) => {

    function openCardContainer(){
        <CardContainer cards={cards} />
    }

  return (
    <div>
      <CollectionMenu collections={collections} setCollections={setCollections} collectionCards={collectionCards} openCardContainer={openCardContainer} setCollectionData={setCollectionData} />
        <CardContainer cards={cards} createNewCard={createNewCard} />
    </div>
  );
};

export default MainView;
