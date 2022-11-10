import AddNewCollectionForm from "../AddNewCollectionForm/AddNewCollectionForm";
import CardViewer from "../CardViewer/CardViewer";

const CardContainer = ({cards}) => {
    return ( 
        <div>
            <CardViewer cards={cards} />
        </div>
     );
}
 
export default CardContainer;