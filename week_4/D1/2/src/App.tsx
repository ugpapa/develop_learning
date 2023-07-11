import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

import { BsFillCalendarMonthFill } from "react-icons/bs";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

      <BsFillCalendarMonthFill color="red" size={40} />
    </div>
  );
}

export default App;
