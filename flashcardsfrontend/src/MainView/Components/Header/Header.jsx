import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Header.css";

const Header = ({
  collections,
  addNewCollection,
  openCardContainer,
  setActiveCollectionData,
}) => {
  return (
    <header>
      <div className="header">
        <h1>Flash</h1>
        <h2>cards</h2>
      </div>
      <DropdownMenu
        collections={collections}
        addNewCollection={addNewCollection}
        setActiveCollectionData={setActiveCollectionData}
      />
    </header>
  );
};

export default Header;
