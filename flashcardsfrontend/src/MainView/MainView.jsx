import React, { useState } from 'react';
import CardContainer from "./Components/CardContainer/CardContainer";
import CollectionMenu from "./Components/CollectionMenu/CollectionMenu";

const MainView = ({collections, setCollections, cards, setCards}) => {


  return (
    <div>
      <CollectionMenu collections={collections} setCollections={setCollections} />
      <CardContainer cards={cards} />
    </div>
  );
};

export default MainView;
