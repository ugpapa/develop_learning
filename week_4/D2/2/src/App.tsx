// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = [
//     "Seoul",
//     "New York",
//     "San Francisco",
//     "Tokyo",
//     "Paris",
//     "Addis Ababa",
//   ];
//   const handlSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         OnSelectItem={handlSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import { useState } from "react";

// import { BsFillCalendarMonthFill } from "react-icons/bs";

// function App() {
//   const [alertVisibility, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisibility && (
//         <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

//       {/* <BsFillCalendarMonthFill color="red" size={40} /> */}
//     </div>
//   );
// }

// export default App;

// import Like from "./components/Like";

// function App() {
//   return (
//     <div>
//       <Like onClick={() => console.log("Clicked")} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import NaveBar from "./components/NaveBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
    "Product4",
    "Product5",
  ]);
  return (
    <div>
      <NaveBar carItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;

// // Update objects
// const [drink, setDrink] = useState({
//   title: "Ice Americano",
//   price: 3,
// });

// setDrink({ ...drink, price: 2 });

// //Updating Nested Objects
// const [customer, setCustomer] = useState({
//   name: "Andy",
//   address: {
//     city: "Busan",
//     zipCode: 14498,
//   },
// });

// setCustomer({
//   ...customer,
//   address: { ...customer.address, zipCode: 14499 },
// });

// // Updating Arrays
// const [tags, setTags] = useState(["x", "y"]);

// // Adding
// setTags([...tags, "z"]);

// //Removing
// setTags(tags.filter((tag) => tag !== "x"));

// //Updateing
// setTags(tags.map((tag) => (tag == "x" ? "X" : tag)));

// //updating array of objects
// const [bugs, setBugs] = useState([
//   { id: 1, title: "Bug 1", fixed: false },
//   { id: 2, title: "Bug 2", fixed: false },
// ]);

// setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

// // updating with immer
// import produce from "immer";

// setBugs(
//   produce((draft) => {
//     const bug = draft.find((bug) => bug.id === 1);
//     if (bug) bug.fixed = true;
//   })
// );
