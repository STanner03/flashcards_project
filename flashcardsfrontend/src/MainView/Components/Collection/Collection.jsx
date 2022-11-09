import React, { useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';

const Collection = (collection, cards) => {

    function handleClick() {
        cards.getCardsForCollection(collection.collectionData.id)
    };
    // console.log(collection)

    return ( 
            <h3 onClick={handleClick}>
                {collection.collectionData.id}
                {collection.collectionData.title}
            </h3>
     );
}
 
export default Collection;