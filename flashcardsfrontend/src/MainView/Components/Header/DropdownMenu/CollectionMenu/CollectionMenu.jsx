import Collection from "./Collection/Collection";

const CollectionMenu = ({
  setOpen,
  setOpen2,
  collections,
  setShowContainer,
  openCardContainer,
  setAddCollectionShow,
  setActiveCollectionData,
}) => {
  const allCollections = collections.map((collection, i) => (
    <Collection
      key={i}
      setOpen={setOpen}
      setOpen2={setOpen2}
      collection={collection}
      setShowContainer={setShowContainer}
      openCardContainer={openCardContainer}
      setActiveCollectionData={setActiveCollectionData}
    />
  ));

  const handleNewCollection = () => {
    setAddCollectionShow(true);
  };

  return (
    <div>
      {allCollections}
      <button className="btn-stl" onClick={handleNewCollection}>
        Add New Collection
      </button>
    </div>
  );
};

export default CollectionMenu;
