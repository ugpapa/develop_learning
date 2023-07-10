import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Seoul",
    "New York",
    "San Francisco",
    "Tokyo",
    "Paris",
    "Addis Ababa",
  ];
  const handlSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        OnSelectItem={handlSelectItem}
      />
    </div>
  );
}

export default App;
