import { useState } from "react";
import CollectionMenu from "../CollectionMenu/CollectionMenu";
import "./DropdownMenu.css";

const DropdownMenu = ({
  collections,
  addNewCollection,
  openCardContainer,
  setActiveCollectionData,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="drp-dn-menu">
      <button onClick={handleOpen}>Collections</button>
      {open ? (
        <div>
          <CollectionMenu
            collections={collections}
            addNewCollection={addNewCollection}
            setActiveCollectionData={setActiveCollectionData}
          />
        </div>
      ) : (
        <div> Is Closed</div>
      )}
    </div>
  );
};

export default DropdownMenu;
