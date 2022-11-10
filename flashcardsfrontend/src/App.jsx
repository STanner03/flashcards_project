import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './MainView/Components/Header/Header';
import MainView from './MainView/MainView';

function App() {

  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [collectionData, setCollectionData] = useState(0);

  useEffect(() => {
    getAllCollections();
  }, [setCollections]);

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
    console.log(id)
  };
  console.log(collectionData.id)
  
  async function createNewCard(newCard, collectionData){
    let tempCard = await axios.post('http://127.0.0.1:8000/api/collections/' + collectionData.id + '/cards/', newCard);
    setCards(tempCard.data);
    console.log(collectionData.id)
  };

  console.log(cards)
  return (
    <div>
      <Header />
      <MainView collections={collections} setCollections={addNewCollection} cards={cards} collectionCards={getCardsForCollection} createNewCard={createNewCard} setCollectionData={setCollectionData} />
    </div>
  );
}

export default App;
