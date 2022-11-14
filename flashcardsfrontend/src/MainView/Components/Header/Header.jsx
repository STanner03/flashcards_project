import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Header.css";

const Header = ({
  collections,
  setShowCardForm,
  setCardFormTitle,

  addNewCollection,
  setShowContainer,
  setActiveCollectionData,
  activeCollectionData,
}) => {
  return (
    <header>
      <div className="header">
        <h1>Flash</h1>
        <h2>cards</h2>
      </div>
      <DropdownMenu
        collections={collections}
        setShowCardForm={setShowCardForm}
        setShowContainer={setShowContainer}
        setCardFormTitle={setCardFormTitle}
        addNewCollection={addNewCollection}
        setActiveCollectionData={setActiveCollectionData}
        activeCollectionData={activeCollectionData}
      />
    </header>
  );
};

export default Header;
