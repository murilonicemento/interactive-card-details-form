import React, { Component } from "react";
import Form from "./Form";
import frontCardImg from "../img/bg-card-front.png";
import backCardImg from "../img/bg-card-back.png";
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
    console.log(month);
    console.log(month.value);
    console.log(errorMonth);
    console.log(errorMonth.value);
    function blankErrorMessage(input, output) {
      if (input.value.trim() === "") {
        input.style.borderColor = "var(--input-erros-border)";
        output.textContent = "Can't be blank";
      }
      return;
    }

    function formatErrorMessage(input, output) {
      if (isNaN(input.value)) {
        input.style.borderColor = "var(--input-erros-border)";
        output.textContent = "Wrong format, numbers only";
      }
      return;
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
    }
    cardholder.value = "";
    cardNumber.value = "";
    month.value = "";
    year.value = "";
    cvc.value = "";
  };

  render() {
    return (
      <main>
        <section>
          <img src={backCardImg} alt="Card Back" />
          <img src={frontCardImg} alt="Card Front" />
        </section>
        <Form handleSubmit={this.handleSubmit} />
      </main>
    );
  }
}
