import Card from "../Card/Card";

const CardViewer = ({cards, createNewCard}) => {

    const allCards = cards.map((cardObj) => (
        <Card cardData={cardObj} createNewCard={createNewCard} />
    ));

    return ( 
        <div>
            {allCards}
            {/* <Card cards={cards} createNewCard={createNewCard} /> */}
        </div>
     );
}
 
export default CardViewer;