import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import "./Header.css";

const Header = ({
  setShow,
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
        setShow={setShow}
        collections={collections}
        setShowCardForm={setShowCardForm}
        setShowContainer={setShowContainer}
        setCardFormTitle={setCardFormTitle}
        addNewCollection={addNewCollection}
        setActiveCollectionData={setActiveCollectionData}
        activeCollectionData={activeCollectionData}
      />
      <div className="header-delete-btn">
        <button className="header-btn">
          <DeleteForeverTwoToneIcon /> Collection
        </button>
      </div>
    </header>
  );
};

export default Header;
