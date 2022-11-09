import React, { useState } from 'react';
import Header from './MainView/Components/Header/Header';
import MainView from './MainView/MainView';

function App() {

  const [collections, setCollections] = useState([
    { title: "Flutter" },
    { title: "CSS" }
  ]);
  const [cards, setCards] = useState([]);

  function addNewCollection(collection){
    let tempCollections = [collection, ...collections];
    setCollections(tempCollections);
  };

  return (
    <div>
      <Header />
      <MainView collections={collections} setCollections={addNewCollection} cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
