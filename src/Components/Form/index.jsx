import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form action="">
      <label htmlFor="cardholder-name">Cardholder Name</label>
      <input
        type="text"
        id="cardholder-name"
        placeholder="e.g Jane Appleseed"
      />
      <label htmlFor="card-number">Card Number</label>
      <input
        type="number"
        id="card-number"
        placeholder="e.g 1234 5678 9123 0000"
      />
      <div>
        <div id="date-information">
          <div>
            <label htmlFor="month">Exp. Date (MM/YY)</label>
            <input type="number" id="month" placeholder="MM" />
            <input type="number" id="year" placeholder="YY" />
          </div>
        </div>
        <span id="cod-information">
          <label htmlFor="cvc">cvc</label>
          <input type="number" id="cvc" placeholder="e.g 123" />
        </span>
      </div>

      <button>Confirm</button>
    </form>
  );
}
