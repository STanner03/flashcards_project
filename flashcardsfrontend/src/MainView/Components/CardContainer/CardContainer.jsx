import CardViewer from "./CardViewer/CardViewer";
import Card from "./Card/Card";

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

  return cards ? (
    <div>
      <CardViewer allCards={allCards} cards={cards} />
    </div>
  ) : (
    <div>Select your Collection to Study from!!</div>
  );
};

export default CardContainer;
