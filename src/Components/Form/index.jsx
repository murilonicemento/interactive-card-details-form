import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

export default function Form({ handleChange, handleSubmit }) {
  return (
    <form action="">
      <label htmlFor="cardholder-name">Cardholder Name</label>
      <input
        type="text"
        id="cardholder-name"
        placeholder="e.g Jane Appleseed"
        onChange={handleChange}
      />
      <label htmlFor="card-number">Card Number</label>
      <input
        type="number"
        id="card-number"
        placeholder="e.g 1234 5678 9123 0000"
        onChange={handleChange}
      />
      <div>
        <div id="date-information">
          <div>
            <label htmlFor="month">Exp. Date (MM/YY)</label>
            <input
              type="number"
              id="month"
              placeholder="MM"
              onChange={handleChange}
            />
            <input
              type="number"
              id="year"
              placeholder="YY"
              onChange={handleChange}
            />
          </div>
        </div>
        <span id="cod-information">
          <label htmlFor="cvc">cvc</label>
          <input
            type="number"
            id="cvc"
            placeholder="e.g 123"
            onChange={handleChange}
          />
        </span>
      </div>

      <button onSubmit={handleSubmit}>Confirm</button>
    </form>
  );
}
