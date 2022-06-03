import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';

const CalButton = ({ id, className, onClick }) => (
  <button type="button" id={id} className={className} onClick={onClick}>{id}</button>
);

CalButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default CalButton;
