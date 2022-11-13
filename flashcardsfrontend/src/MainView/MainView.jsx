import axios from "axios";
import React, { useEffect, useState } from "react";
import CardContainer from "./Components/CardContainer/CardContainer";
import CreateCardForm from "./Components/CardContainer/CreateCardForm/CreateCardForm";
import Modal from "./Components/Modal/Modal";
import Header from "./Components/Header/Header";
import './MainView.css'

const MainView = ({}) => {
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [activeCollectionData, setActiveCollectionData] = useState({
    id: 0,
    title: "",
  });
  const [activeCardData, setActiveCardData] = useState([]);
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardFormTitle, setCardFormTitle] = useState("");

  useEffect(() => {
    getAllCollections();
  }, []);

  useEffect(() => {
    getCardsForCollection();
  }, [activeCollectionData]);

  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  async function addNewCollection(collection) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/collections/",
      collection
    );
    // setCollections(response.data);
    getAllCollections();
  }

  async function getCardsForCollection() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/collections/" +
        activeCollectionData?.id +
        "/cards/"
    );
    setCards(response.data);
  }

  async function createNewCard(newCard) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/collections/" +
        activeCollectionData?.id +
        "/cards/",
      newCard
    );
    setCards(response.data);
  }
  const handleClose = () => setShowCardForm(false);

  // function openCardContainer() {
  //   <CardContainer cards={cards} />;
  // }

  return (
    <div className="main-view">
      <Header
        collections={collections}
        setShowCardForm={setShowCardForm}
        setCardFormTitle={setCardFormTitle}
        addNewCollection={addNewCollection}
        setActiveCollectionData={setActiveCollectionData}
        activeCollectionData={activeCollectionData}
      />
      <CardContainer
        cards={cards}
        setShowCardForm={setShowCardForm}
        setCardFormTitle={setCardFormTitle}
        setActiveCardData={setActiveCardData}
        getCardsForCollection={getCardsForCollection}
      />
      <Modal show={showCardForm} onClose={handleClose} title={cardFormTitle}>
        <CreateCardForm
          createNewCard={createNewCard}
          setShowCardForm={setShowCardForm}
          cardFormTitle={cardFormTitle}
          activeCardData={activeCardData}
        />
      </Modal>
    </div>
  );
};

export default MainView;
