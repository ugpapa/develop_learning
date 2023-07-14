// Importing useState from react to manage the local state of this component
import { useState } from "react";
// import style from "./ListGroup.module.css";
import style from "styled-components";

const UList = style.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = style.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "pink" : "none")}
`;

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
      {/* <ul className={[style.ListGroup, style.container].join(" ")}> */}
      <UList>
        {
          // Map over each item in the 'items' array and render a list item for each
          items.map((item, index) => (
            <ListItem
              // Change the CSS class based on whether the current item is selected or not
              active={index === selectedIndex}
              key={item} // Provide a unique key for each list item based on the item content
              onClick={() => {
                setSelectedIndex(index); // When a list item is clicked, update selectedIndex state to the index of the clicked item
                OnSelectItem(item);
              }}
            >
              {item} {/*  Display the content of the item */}
            </ListItem>
          ))
        }
      </UList>
    </>
  );
}

// Export the ListGroup component as the default export
export default ListGroup;
