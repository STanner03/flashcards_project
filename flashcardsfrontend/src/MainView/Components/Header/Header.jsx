import DropdownMenu from "./DropdownMenu/DropdownMenu.jsx";
import "./Header.css";

const Header = ({
  setShow,
  setFileType,
  collections,
  setShowCardForm,
  setCardFormTitle,
  addNewCollection,
  setShowContainer,
  setActiveCollectionData,
  activeCollectionData,
  setAddCollectionShow,
}) => {
  return (
    <header>
      <div className="header">
        <h1>Flash</h1>
        <h2>cards</h2>
      </div>
      <DropdownMenu
        setShow={setShow}
        setFileType={setFileType}
        collections={collections}
        setShowCardForm={setShowCardForm}
        setShowContainer={setShowContainer}
        setCardFormTitle={setCardFormTitle}
        addNewCollection={addNewCollection}
        setActiveCollectionData={setActiveCollectionData}
        activeCollectionData={activeCollectionData}
        setAddCollectionShow={setAddCollectionShow}
      />
    </header>
  );
};

export default Header;