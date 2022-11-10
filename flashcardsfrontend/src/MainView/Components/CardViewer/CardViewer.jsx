import { useState } from "react";

const CardViewer = ({allCards, createNewCard}) => {

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if(index < allCards.length - 1)
            setIndex(index + 1);
        else(
            setIndex(0)
        );
        console.log(index)
    }

    const handlePrev = () => {
        if(index > 0)
            setIndex(index - 1);
        else(
            setIndex(allCards.length - 1)
        )
    }

    return ( 
        <div>
            {allCards[index]}
            <button onClick={handlePrev} >Prev</button>
            <button onClick={handleNext} >Next</button>
        </div>
     );
}
 
export default CardViewer;