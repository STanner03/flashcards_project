import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './MainView/Components/Header/Header';
import MainView from './MainView/MainView';

function App() {

  const [collections, setCollections] = useState([
    // { title: "Flutter" },
    // { title: "CSS" }
  ]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCollections();
  }, []);

  async function getAllCollections(){
    let promise = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(promise.data);
  };

  async function addNewCollection(collection){
    let tempCollections = await axios.post('http://127.0.0.1:8000/api/collections/', collection);
    setCollections(tempCollections.data);
    getAllCollections();
  };
  
  async function getCardsForCollection(id){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/' + id + '/cards/');
    setCards(response.data);
  }

  return (
    <div>
      <Header />
      <MainView collections={collections} setCollections={addNewCollection} cards={cards} collectionCards={getCardsForCollection} setCards={setCards} />
    </div>
  );
}

export default App;
