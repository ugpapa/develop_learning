import React from "react";

// Define a TypeScript interface for an Expense.
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

// Define a TypeScript interface for Props of ExpenseList component.
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

// Define the ExpenseList component.
const ExpenseList = ({ expenses, onDelete }: Props) => {
  // If there are no expenses, render nothing.
  if (expenses.length === 0) return null;

  return (
    // Render a table of expenses.
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* Map through the expenses and render each one in a table row. */}
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>
              {/* Include a 'Delete' button for each expense. 
              When clicked, it calls the onDelete function passed as a prop. */}
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          {/* Render the total amount of all expenses in the table footer. */}
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

// Export the ExpenseList component as the default export.
export default ExpenseList;
