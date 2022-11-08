import CardContainer from "./Components/CardContainer/CardContainer";
import CollectionMenu from "./Components/CollectionMenu/CollectionMenu";

const MainView = (props) => {
  const [collections, setCollections] = useState([
    { title: "Flutter" },
    { title: "CSS" },
  ]);
  const [cards, setCards] = useState([]);

  return (
    <div>
      <CollectionMenu />
      <CardContainer />
    </div>
  );
};

export default MainView;
