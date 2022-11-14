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
  const handleCancel = () => setShowCardForm(false);

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
      getAllCollections()
    }
    setShowCardForm(false);

  }

  return (
    <div className="form-bg">
      <div className="form-body">
        Are you sure you want to Permanently DELETE this {fileType}
      </div>
      <div className="form-footer">
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default DeleteAffirmationForm;
