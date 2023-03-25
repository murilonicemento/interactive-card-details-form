import React, { Component } from "react";
import Form from "./Form";
import frontCardImg from "../img/bg-card-front.png";
import backCardImg from "../img/bg-card-back.png";
import cardLogo from "../img/card-logo.svg";
import iconComplete from "../img/icon-complete.svg";
import "./Main.css";

export default class Main extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const cardholder = document.getElementById("cardholder-name");
    const cardNumber = document.getElementById("card-number");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const cvc = document.getElementById("cvc");
    const errorCardholder = document.getElementById("error-cardholder");
    const errorCardNumber = document.getElementById("error-card-number");
    const errorMonth = document.getElementById("error-month");
    const errorCvc = document.getElementById("error-cvc");

    function blankErrorMessage(input, output) {
      if (input.value.trim() === "") {
        input.style.borderColor = "var(--input-erros-border)";
        output.textContent = "Can't be blank";
      } else {
        input.style.borderColor = "hsl(249, 99%, 64%)";
        output.textContent = "";
      }
    }

    function formatErrorMessage(input, output) {
      if (isNaN(input.value)) {
        input.style.borderColor = "var(--input-erros-border)";
        output.textContent = "Wrong format, numbers only";
      }
    }

    blankErrorMessage(cardholder, errorCardholder);
    blankErrorMessage(cardNumber, errorCardNumber);
    blankErrorMessage(month, errorMonth);
    blankErrorMessage(year, errorMonth);
    blankErrorMessage(cvc, errorCvc);

    formatErrorMessage(cardNumber, errorCardNumber);
    formatErrorMessage(month, errorMonth);
    formatErrorMessage(year, errorMonth);
    formatErrorMessage(cvc, errorCvc);

    if (month.style.borderColor === "var(--input-erros-border)") {
      document.getElementById("cod-information").style.marginTop = "-110px";
    } else {
      document.getElementById("cod-information").style.marginTop = "";
    }
  };

  render() {
    return (
      <main>
        <section>
          <img src={backCardImg} alt="Card Back" id="card-back" />
          <img src={frontCardImg} alt="Card Front" id="card-front" />
          <img src={cardLogo} alt="Card Logo" id="card-logo" />
          <p id="number">0000 0000 0000 0000</p>
          <div>
            <p id="name">Jane Appleseed</p>
            <p id="date">00/00</p>
          </div>
          <p id="card-cvc">000</p>
        </section>
        <Form handleSubmit={this.handleSubmit} />
      </main>
    );
  }
}
