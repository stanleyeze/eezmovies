import React from "react";

const Button = ({ name }) => {
  return (
    <button class="waves-effect waves-light btn deep-orange accent-3">
      {name}
    </button>
  );
};

export default Button;
