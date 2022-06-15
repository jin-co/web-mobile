import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
//   const onClick = () => {
//     console.log('heh')
//   };

  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.prototype = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
