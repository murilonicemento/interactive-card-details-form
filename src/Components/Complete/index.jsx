import React from "react";
import PropTypes from "prop-types";
import iconComplete from "../../img/icon-complete.svg";
import "./Complete.css";

export default function Complete({ handleClick }) {
  return (
    <section id="complete-state">
      <img src={iconComplete} alt="Icon Complete" />
      <p>Thank You!</p>
      <p>We've added your card details</p>
      <button onClick={handleClick}>Continue</button>
    </section>
  );
}

Complete.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
