// Importing React from 'react' library
import React from "react";

// Defining a TypeScript interface to type-check our props
interface Props {
  cartItemsCount: number; // cartItemsCount prop which is a number
}

// Defining a functional component NavBar which takes a props object of type Props
const NavBar = ({ cartItemsCount }: Props) => {
  // Returning a div element that displays a string and the value of cartItemsCount
  return <div>NavBar: {cartItemsCount}</div>;
};

// Exporting the NavBar component as the default export
export default NavBar;
