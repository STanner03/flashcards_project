import AddNewCollectionForm from "../AddNewCollectionForm/AddNewCollectionForm";
import CardViewer from "../CardViewer/CardViewer";

const CardContainer = ({cards, createNewCard}) => {
    return ( 
        <div>
            <CardViewer cards={cards} createNewCard={createNewCard} />
        </div>
     );
}
 
export default CardContainer;