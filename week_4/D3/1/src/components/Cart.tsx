// Importing React from 'react' library
import React from "react";

// Defining a TypeScript interface to type-check our props
interface Props {
  cartItems: string[]; // cartItems prop which is an array of strings
  onClear: () => void; // onClear prop which is a function that doesn't take any arguments and doesn't return anything
}

// Defining a functional component Cart which takes a props object of type Props
const Cart = ({ cartItems, onClear }: Props) => {
  // Returning a fragment that contains a div element, an unordered list element, and a button element
  return (
    <>
      <div>Cart</div>
      <ul>
        {/* Mapping over cartItems array to render each item as a list element */}
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Adding onClick event listener to button to call onClear function when clicked */}
      <button onClick={onClear}>Clear</button>
    </>
  );
};

// Exporting the Cart component as the default export
export default Cart;
