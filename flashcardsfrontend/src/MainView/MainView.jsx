import axios from "axios";
import React, { useEffect, useState } from "react";
import CardContainer from "./Components/CardContainer/CardContainer";
import CreateCardForm from "./Components/CardContainer/CreateCardForm/CreateCardForm";
import Modal from "./Components/Modal/Modal";
import Header from "./Components/Header/Header";
import "./MainView.css";
import DeleteAffirmationForm from "./Components/DeleteAffirmationForm/DeleteAffirmationForm";

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
  const [show, setShow] = useState(true);
  const [showContainer, setShowContainer] = useState(false);

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

  return (
    <div className="main-view">
      <Header
        collections={collections}
        setShowCardForm={setShowCardForm}
        setShowContainer={setShowContainer}
        setCardFormTitle={setCardFormTitle}
        addNewCollection={addNewCollection}
        setActiveCollectionData={setActiveCollectionData}
        activeCollectionData={activeCollectionData}
      />
      {showContainer ? (
        <CardContainer
          cards={cards}
          setShowCardForm={setShowCardForm}
          setCardFormTitle={setCardFormTitle}
          setActiveCardData={setActiveCardData}
          getCardsForCollection={getCardsForCollection}
          activeCollectionData={activeCollectionData}
        />
      ) : (
        <div className="main-welcome">
          <div>Select your</div>
          <div>Collection to</div>
          <div>Study!!</div>
        </div>
      )}
      <Modal show={showCardForm} onClose={handleClose} title={cardFormTitle}>
        {show ? (
          <CreateCardForm
            createNewCard={createNewCard}
            setShowCardForm={setShowCardForm}
            cardFormTitle={cardFormTitle}
            activeCardData={activeCardData}
            getCardsForCollection={getCardsForCollection}
          />
        ) : (
          <DeleteAffirmationForm 
          setShowCardForm={setShowCardForm}
          />
        )}
      </Modal>
    </div>
  );
};

export default MainView;
