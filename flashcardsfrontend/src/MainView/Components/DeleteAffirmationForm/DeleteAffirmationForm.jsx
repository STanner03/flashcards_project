import axios from "axios";
import "./DeleteAffirmationForm.css";

const DeleteAffirmationForm = ({
  fileType,
  activeCardData,
  activeCollectionData,
  setShowCardForm,
  getCardsForCollection,
  getAllCollections,
}) => {
  async function handleDelete() {
    if (fileType === "card") {
      let response = await axios.delete(
        "http://127.0.0.1:8000/api/collections/" +
          activeCollectionData?.id +
          "/cards/" +
          activeCardData?.id +
          "/"
      );
      getCardsForCollection();
    } else if (fileType === "collection") {
      let response = await axios.delete(
        "http://127.0.0.1:8000/api/collections/" + activeCollectionData?.id
      );
      getAllCollections();
    }
    setShowCardForm(false);
  }

  return (
    <div>
      <div className="del-form-body">
        Are you sure you want to Permanently DELETE this {fileType}
      </div>
      <div className="del-form-footer">
        <button className="del-form-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default DeleteAffirmationForm;
