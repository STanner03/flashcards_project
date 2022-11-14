import CardViewer from "./CardViewer/CardViewer";
import Card from "./Card/Card";
import "./CardContainer.css";

const CardContainer = ({
  cards,
  setShowCardForm,
  setCardFormTitle,
  setActiveCardData,
  getCardsForCollection,
}) => {
  const allCards = cards.map(
    (cardData, i, a) => (
      (i += 1),
      (
        <Card
          key={i}
          i={i}
          a={a}
          cardData={cardData}
          setShowCardForm={setShowCardForm}
          setCardFormTitle={setCardFormTitle}
          setActiveCardData={setActiveCardData}
          getCardsForCollection={getCardsForCollection}
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
