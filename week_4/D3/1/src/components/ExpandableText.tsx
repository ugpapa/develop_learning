// Importing React and useState from 'react' library
import React, { useState } from "react";

// Defining a TypeScript interface to type-check our props
interface Props {
  children: string; // children prop which is a string
  maxChars?: number; // maxChars prop which is an optional number
}

// Defining a functional component ExpandableText which takes a props object of type Props
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  // Initializing isExpanded state to false
  const [isExpanded, setExpanded] = useState(false);

  // If the length of children string is less than or equal to maxChars,
  // we just return a paragraph with children string as it is.
  if (children.length <= maxChars) return <p>{children}</p>;

  // If isExpanded is true, we show all children string, otherwise, we show only a substring of it
  const text = isExpanded ? children : children.substring(0, maxChars);

  // Return a paragraph that shows the text and a More/Less button.
  // When the button is clicked, it toggles the isExpanded state.
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

// Exporting the ExpandableText component as the default export
export default ExpandableText;
