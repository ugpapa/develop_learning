// Importing required objects from 'react-hook-form', 'zod', and '@hookform/resolvers/zod'
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Defining a schema using zod for form validation
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }), // 'name' field must be a string of minimum 3 characters
  age: z
    .number({ invalid_type_error: "Age field is required." }) // 'age' field must be a number
    .min(18, { message: "Age must be at least 18." }), // 'age' must be minimum 18
});

// Using z.infer to create a type based on the schema
type FormData = z.infer<typeof schema>;

// Defining a functional component 'Form'
const Form = () => {
  // Using useForm hook from 'react-hook-form' with zodResolver for form handling and validation
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Defining onSubmit function to log the form data
  const onSubmit = (data: FieldValues) => console.log(data);

  // Rendering a form with 'name' and 'age' fields, and a submit button
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 'name' field with validation error message */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      {/* 'age' field with validation error message */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      {/* Submit button which is disabled if the form is not valid */}
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

// Exporting the Form component as the default export
export default Form;
