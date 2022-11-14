import axios from "axios";
import React, { useEffect, useState } from "react";
import CardContainer from "./Components/CardContainer/CardContainer";
import CreateCardForm from "./Components/CardContainer/CreateCardForm/CreateCardForm";
import Modal from "./Components/Modal/Modal";
import Header from "./Components/Header/Header";
import "./MainView.css";
import DeleteAffirmationForm from "./Components/DeleteAffirmationForm/DeleteAffirmationForm";
import AddNewCollectionForm from "./Components/CollectionMenu/AddNewCollectionForm/AddNewCollectionForm";

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
  const [fileType, setFileType] = useState("collection");
  const [addCollectionShow, setAddCollectionShow] = useState(false);

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
    getAllCollections();
  }

  async function createNewCard(newCard) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/collections/" +
        activeCollectionData?.id +
        "/cards/",
      newCard
    );
    setCards(...cards, newCard);
    getCardsForCollection();
  }
  const handleClose = () => setShowCardForm(false);

  return (
    <div className="main-view">
      <Header
        setShow={setShow}
        collections={collections}
        setShowCardForm={setShowCardForm}
        setShowContainer={setShowContainer}
        setCardFormTitle={setCardFormTitle}
        addNewCollection={addNewCollection}
        setActiveCollectionData={setActiveCollectionData}
        activeCollectionData={activeCollectionData}
        setAddCollectionShow={setAddCollectionShow}
      />
      {showContainer ? (
        <CardContainer
          cards={cards}
          setShow={setShow}
          setFileType={setFileType}
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
      <Modal
        show={addCollectionShow}
        onClose={handleClose}
        title={"Add New Collection"}
      >
        <AddNewCollectionForm
          addNewCollection={addNewCollection}
          setAddCollectionShow={setAddCollectionShow}
        />
      </Modal>
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
            fileType={fileType}
            activeCardData={activeCardData}
            activeCollectionData={activeCollectionData}
            setShowCardForm={setShowCardForm}
            getCardsForCollection={getCardsForCollection}
            getAllCollections={getAllCollections}
          />
        )}
      </Modal>
    </div>
  );
};

export default MainView;
