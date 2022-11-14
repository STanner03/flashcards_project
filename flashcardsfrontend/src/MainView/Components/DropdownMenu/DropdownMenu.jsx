import { useState } from "react";
import CollectionMenu from "../CollectionMenu/CollectionMenu";
import "./DropdownMenu.css";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";

const DropdownMenu = ({
  setShow,
  collections,
  setShowCardForm,
  setCardFormTitle,
  addNewCollection,
  setShowContainer,
  setActiveCollectionData,
  activeCollectionData,
}) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  function handleAddCard() {
    setShow(true);
    setShowCardForm(true);
    setCardFormTitle("New Card");
  }

  return (
    <div className="drp-dn-menu">
      <button className="btn-stl" onClick={handleOpen}>
        Collections
        {open ? <ArrowDropUpTwoToneIcon /> : <ArrowDropDownTwoToneIcon />}
      </button>
      {open ? (
        <div>
          <CollectionMenu
            setOpen={setOpen}
            setOpen2={setOpen2}
            collections={collections}
            setShowContainer={setShowContainer}
            addNewCollection={addNewCollection}
            setActiveCollectionData={setActiveCollectionData}
          />
        </div>
      ) : (
        <div>
          {open2 ? (
            <div>
              <div className="sel-col">{activeCollectionData.title}</div>
              <button className="btn-stl" onClick={handleAddCard}>
                Add New Card
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
