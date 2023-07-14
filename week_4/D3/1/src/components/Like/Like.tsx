// Importing useState from 'react' library for state management
import { useState } from "react";

// Importing specific icons from 'react-icons/ai' library
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// Defining a TypeScript interface to type-check our props
interface Props {
  onClick: () => void; // onClick is a function prop that doesn't take any arguments and doesn't return anything
}

// Defining a functional component Like which takes a props object of type Props
const Like = ({ onClick }: Props) => {
  // Initializing status state to false
  const [status, setStatus] = useState(false);

  // Defining a toggle function which will invert the status state and call onClick function
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  // If status is true, return a filled heart icon; on click it calls the toggle function
  if (status) return <AiFillHeart color="red" size={20} onClick={toggle} />;

  // If status is false, return an outlined heart icon; on click it calls the toggle function
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

// Exporting the Like component as the default export
export default Like;
