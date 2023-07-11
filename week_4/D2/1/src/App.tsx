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

import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
