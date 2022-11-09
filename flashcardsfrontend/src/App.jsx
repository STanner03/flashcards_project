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
    // getAllCards();
  }, []);

  async function getAllCollections(){
    let promise = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(promise.data);
  };

  // function getAllCards(){
  //   let response = 
  // }

  async function addNewCollection(collection){
    let tempCollections = await axios.post('http://127.0.0.1:8000/api/collections/', collection)
    // [collection, ...collections]
    ;
    setCollections(tempCollections.data);
    getAllCollections();
  };

  return (
    <div>
      <Header />
      <MainView collections={collections} setCollections={addNewCollection} cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
