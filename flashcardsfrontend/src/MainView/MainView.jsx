import axios from "axios";
import React, { useEffect, useState } from "react";
import CardContainer from "./Components/CardContainer/CardContainer";
import CollectionMenu from "./Components/CollectionMenu/CollectionMenu";

const MainView = ({}) => {
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [collectionData, setCollectionData] = useState(0); // maybe change to activeCollectionId?

  useEffect(() => {
    getAllCollections();
  }, [collectionData]);

  useEffect(() => {
    getCardsForCollection();
  }, [collectionData]);

  async function getAllCollections() {
    let promise = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(promise.data);
  }

  async function addNewCollection(collection) {
    let tempCollections = await axios.post(
      "http://127.0.0.1:8000/api/collections/",
      collection
    );
    setCollections(tempCollections.data);
    getAllCollections();
  }

  async function getCardsForCollection() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/collections/" + collectionData.id + "/cards/"
    );
    setCards(response.data);
    console.log(collectionData.id);
  }
  console.log(collectionData.id);

  async function createNewCard(newCard) {
    let tempCard = await axios.post(
      "http://127.0.0.1:8000/api/collections/" + collectionData.id + "/cards/",
      newCard
    );
    setCards(tempCard.data);
    console.log(collectionData.id);
  }

  async function deleteCard() {}

  console.log(cards);

  // function openCardContainer() {
  //   <CardContainer cards={cards} />;
  // }

  return (
    <div>
      <CollectionMenu
        collections={collections}
        addNewCollection={addNewCollection}
        getCardsForCollection={getCardsForCollection}
        // openCardContainer={openCardContainer}
        setCollectionData={setCollectionData}
      />
      <CardContainer
        cards={cards}
        createNewCard={createNewCard}
        deleteCard={deleteCard}
      />
    </div>
  );
};

export default MainView;
