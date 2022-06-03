import React from "react";
import "./Calculator.css";
import PropTypes from "prop-types";

const CalButton = (props) => {
  return (
    <button type="button" id={props.id} className={props.className} onClick={props.onClick}>{props.id}</button>
  );
};

CalButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalButton;
