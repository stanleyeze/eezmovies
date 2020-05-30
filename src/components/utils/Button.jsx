import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button
      className="waves-effect waves-light btn deep-orange accent-3"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
