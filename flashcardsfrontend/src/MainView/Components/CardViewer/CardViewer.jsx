import Card from "../Card/Card";

const CardViewer = ({cards}) => {
    return ( 
        <div>
            <Card cards={cards} />
        </div>
     );
}
 
export default CardViewer;