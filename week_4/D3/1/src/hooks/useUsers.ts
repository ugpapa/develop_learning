import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-service";

// Define the custom hook.
const useUsers = () => {
  // Define state variables for users, error message, and loading state.
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Use useEffect to fetch data when the component mounts.
  useEffect(() => {
    // Indicate loading state.
    setLoading(true);

    // Initiate the request to fetch users.
    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        // On successful response, update the users state and reset the loading state.
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // On error, check if the error is a cancellation error.
        if (err instanceof CanceledError) return;

        // If it's not a cancellation error, update the error state and reset the loading state.
        setError(err.message);
        setLoading(false);
      });

    // Clean up function to cancel the request when the component unmounts.
    return () => cancel();
  }, []);

  // Return the users, error, and loading state, along with the setters for users and error.
  return { users, error, isLoading, setUsers, setError };
};

// Export the custom hook.
export default useUsers;
