import Card from "../Card/Card";

const CardViewer = (collectionCards) => {
    return ( 
        <div>
            <Card collectionCards={collectionCards} />
        </div>
     );
}
 
export default CardViewer;