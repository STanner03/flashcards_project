import axios from "axios";
import React, { useEffect, useState } from "react";
import CardContainer from "./Components/CardContainer/CardContainer";
import CollectionMenu from "./Components/CollectionMenu/CollectionMenu";
import CreateCardForm from "./Components/CardContainer/CreateCardForm/CreateCardForm";
import Modal from "./Components/Modal/Modal";

const MainView = ({}) => {
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [activeCollectionData, setActiveCollectionData] = useState(0);
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardFormTitle, setCardFormTitle] = useState('')

  useEffect(() => {
    getAllCollections();
  }, [activeCollectionData]);

  useEffect(() => {
    getCardsForCollection();
  }, [activeCollectionData]);

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
      "http://127.0.0.1:8000/api/collections/" +
        activeCollectionData.id +
        "/cards/"
    );
    setCards(response.data);
    console.log(activeCollectionData.id);
  }
  console.log(activeCollectionData.id);

  async function createNewCard(newCard) {
    let tempCard = await axios.post(
      "http://127.0.0.1:8000/api/collections/" +
        activeCollectionData.id +
        "/cards/",
      newCard
    );
    // setCards(tempCard.data);
    console.log(activeCollectionData.id);
  }

  const handleClose = () => setShowCardForm(false)

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
        setActiveCollectionData={setActiveCollectionData}
      />
      <CardContainer
        cards={cards}
        setShowCardForm={setShowCardForm}
        setCardFormTitle={setCardFormTitle}
      />
      <Modal show={showCardForm} onClose={handleClose} title={cardFormTitle}>
        <CreateCardForm createNewCard={createNewCard} setShowCardForm={setShowCardForm} />
      </Modal>
    </div>
  );
};

export default MainView;
