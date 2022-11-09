import Collection from "../Collection/Collection";
import AddNewCollectionForm from "../AddNewCollectionForm/AddNewCollectionForm";
import React, { useState } from 'react';


const CollectionMenu = ({ collections, setCollections, collectionCards }) => {

    const allCollections = collections.map((collection) => (
        <Collection collectionData={collection} collectionCards={collectionCards} />
    ));

  return (
        <div>
            {allCollections} 
            <AddNewCollectionForm setCollections={setCollections} />
        </div>
  );
};

export default CollectionMenu;