import Card from "../Card/Card";

const CardViewer = ({cards, createNewCard}) => {

    let i = 0;
    const allCards = cards.map((cardObj) => (
        i += 1,
        <Card cards={cards} cardData={cardObj} createNewCard={createNewCard} i={i} />
    ));

    return ( 
        <div>
            {allCards}
            {/* <Card cards={cards} createNewCard={createNewCard} /> */}
        </div>
     );
}
 
export default CardViewer;