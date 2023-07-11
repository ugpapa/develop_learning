import React, { Children } from "react";

interface ButtonProps {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "info" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
