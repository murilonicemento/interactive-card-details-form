import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

export default function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardholder-name">Cardholder Name</label>
      <input
        type="text"
        autoComplete="off"
        id="cardholder-name"
        placeholder="e.g Jane Appleseed"
      />
      <p id="error-cardholder"></p>
      <label htmlFor="card-number">Card Number</label>
      <input
        type="number"
        autoComplete="off"
        id="card-number"
        placeholder="e.g 1234 5678 9123 0000"
      />
      <p id="error-card-number"></p>
      <div>
        <div id="date-information">
          <div>
            <label htmlFor="month">Exp. Date (MM/YY)</label>
            <input
              type="number"
              autoComplete="off"
              id="month"
              placeholder="MM"
              min="1"
              max="12"
            />
            <input
              type="number"
              autoComplete="off"
              id="year"
              placeholder="YY"
              maxLength="2"
            />
            <p id="error-month"></p>
          </div>
        </div>
        <span id="cod-information">
          <label htmlFor="cvc">cvc</label>
          <input
            type="number"
            autoComplete="off"
            id="cvc"
            placeholder="e.g 123"
            maxLength="3"
          />
          <p id="error-cvc"></p>
        </span>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
