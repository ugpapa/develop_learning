//} Define a constant array 'categories' with specific elements:
//  "Groceries", "Utilities", and "Entertainment"
// The 'as const' assertion indicates that 'categories' is a read-only array,
//  i.e., no other elements can be added or existing ones modified
const categories = ["Groceries", "Utilities", "Entertainment"] as const;

// Export the 'categories' array as the default export of the module
export default categories;
