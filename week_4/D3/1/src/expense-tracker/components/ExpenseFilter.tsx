// Import the React library
import React from "react";
// Import the 'categories' array from '../categories'
import categories from "../categories";

// Define the type for the properties (props) for this component.
// This component receives a 'onSelectCategory' function as a prop,
// which accepts a string and returns void.
interface Props {
  onSelectCategory: (category: string) => void;
}

// Define a functional component 'ExpenseFilter', which accepts Props
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  // This component returns a select element with an onChange handler.
  // When the value of the select element changes, it triggers the 'onSelectCategory' function with the new value.
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      // 'All categories' is a default option
      <option value="">All categories</option>
      // For each category in the 'categories' array, create an option element
      with the category as its key and value.
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

// Export the 'ExpenseFilter' component as the default export of the module
export default ExpenseFilter;
