import CardViewer from "./CardViewer/CardViewer";
import Card from "./Card/Card";
import "./CardContainer.css";

const CardContainer = ({
  cards,
  setShow,
  setFileType,
  setShowCardForm,
  setCardFormTitle,
  setActiveCardData,
  getCardsForCollection,
  activeCollectionData
}) => {
  const allCards = cards.map(
    (cardData, i, a) => (
      (i += 1),
      (
        <Card
          key={i}
          i={i}
          a={a}
          setShow={setShow}
          cardData={cardData}
          setFileType={setFileType}
          setShowCardForm={setShowCardForm}
          setCardFormTitle={setCardFormTitle}
          setActiveCardData={setActiveCardData}
          getCardsForCollection={getCardsForCollection}
          activeCollectionData={activeCollectionData}
        />
      )
    )
  );

  return (
    <div className="card-vwr-bg">
      <CardViewer allCards={allCards} cards={cards} />
    </div>
  );
};

export default CardContainer;
