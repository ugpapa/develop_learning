// Importing useState from react to manage the local state of this component
import { useState } from "react";

// Define TypeScript interface for the ListGroup component props
interface ListGroupProps {
  items: string[]; // Array of items that will be displayed in the list
  heading: string; // Heading of the list
  OnSelectItem: (item: string) => void;
}

// Define a functional component ListGroup
function ListGroup({ items, heading, OnSelectItem }: ListGroupProps) {
  // Using react hook useState to keep track of the selected index from the list
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Render JSX
  return (
    <>
      <h1>{heading}</h1> {/* Display the heading */}
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* Show 'No item found' if
      there are no items in the list */}
      <ul className="list-group">
        {
          // Map over each item in the 'items' array and render a list item for each
          items.map((item, index) => (
            <li
              // Change the CSS class based on whether the current item is selected or not
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item} // Provide a unique key for each list item based on the item content
              onClick={() => {
                setSelectedIndex(index); // When a list item is clicked, update selectedIndex state to the index of the clicked item
                OnSelectItem(item);
              }}
            >
              {item} {/*  Display the content of the item */}
            </li>
          ))
        }
      </ul>
    </>
  );
}

// Export the ListGroup component as the default export
export default ListGroup;
