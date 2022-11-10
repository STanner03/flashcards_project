import React, { useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';

const Collection = ({collectionData, collectionCards, openCardContainer}) => {

    function handleClick() {
        collectionCards(collectionData.id);
        openCardContainer()

    };
    // console.log(collection)

    return ( 
            <h3 onClick={handleClick}>
                {collectionData.id}
                {collectionData.title}
            </h3>
     );
}
 
export default Collection;