import { useEffect, useState } from "react";
import "./CardViewer.css";

const CardViewer = ({ allCards, cards }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [cards]);

  const handleNext = () => {
    if (index < allCards.length - 1) setIndex(index + 1);
    else setIndex(0);
    console.log(index);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(allCards.length - 1);
  };

  return (
    <div className="card-vwr">
      {allCards[index]}
      <div className="viewer-spc">
        <button className="viewer-btn" onClick={handlePrev}>
          Prev
        </button>
        <button className="viewer-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardViewer;
