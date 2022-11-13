import './Collection.css'

const Collection = ({
  setOpen,
  setOpen2,
  collection,
  openCardContainer,
  setActiveCollectionData,
}) => {
  function handleClick() {
    setActiveCollectionData(collection);
    setOpen2(true);
    setOpen(false);
    // openCardContainer();
  }

  return (
    <h3 className="collection-btn" onClick={handleClick}>
      {collection.title}
    </h3>
  );
};

export default Collection;
