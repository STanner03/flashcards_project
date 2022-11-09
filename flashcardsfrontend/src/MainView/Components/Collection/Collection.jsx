import React, { useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';

const Collection = (collection) => {

    function handleClick() {
        <CardContainer />
    }

    return ( 
            <h3 onClick={handleClick}>
                {collection.collectionData.title}
            </h3>
     );
}
 
export default Collection;