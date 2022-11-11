import AddNewCollectionForm from "../CollectionMenu/AddNewCollectionForm/AddNewCollectionForm";
import CardViewer from "./CardViewer/CardViewer";
import Card from "./Card/Card";

const CardContainer = ({ cards, createNewCard, deleteCard }) => {
  const allCards = cards.map(
    (cardObj, i, a) => (
      (i += 1),
      (
        <Card
          key={i}
          i={i}
          a={a}
          cardData={cardObj}
          createNewCard={createNewCard}
          deleteCard={deleteCard}
        />
      )
    )
  );

  return cards ? (
    <div>
      <CardViewer allCards={allCards} createNewCard={createNewCard} />
    </div>
  ) : (
    <div>Select your Collection to Study from!!</div>
  );
};

export default CardContainer;
