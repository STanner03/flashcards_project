import AddNewCollectionForm from "../AddNewCollectionForm/AddNewCollectionForm";
import CardViewer from "../CardViewer/CardViewer";

const CardContainer = (collectionCards) => {
    return ( 
        <div>
            <CardViewer collectionCards={collectionCards} />
        </div>
     );
}
 
export default CardContainer;