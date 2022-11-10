import AddNewCollectionForm from "../AddNewCollectionForm/AddNewCollectionForm";
import CardViewer from "../CardViewer/CardViewer";
import Card from "../Card/Card";


const CardContainer = ({cards, createNewCard}) => {

    const allCards = cards.map((cardObj, i, a) => (
        i += 1,
        <Card key={i} i={i} a={a} cardData={cardObj} createNewCard={createNewCard} />
    ));


    return ( 
        <div>
            <CardViewer allCards={allCards} createNewCard={createNewCard} />
        </div>
     );
}
 
export default CardContainer;