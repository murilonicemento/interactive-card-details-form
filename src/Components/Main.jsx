import React, { Component } from "react";
import Form from "./Form";
import Complete from "./Complete";
import frontCardImg from "../img/bg-card-front.png";
import backCardImg from "../img/bg-card-back.png";
import cardLogo from "../img/card-logo.svg";
import "./Main.css";

export default class Main extends Component {
  state = {
    cardholder: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "cardNumber") {
      const trimmedValue = value.replace(/\s+/g, "");
      const formattedValue = trimmedValue.replace(/(.{4})/g, "$1 ");
      this.setState({ [name]: formattedValue });
    } else {
      this.setState({ [name]: value });
    }
  };

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
        const form = document.querySelector("form");
        const completeState = document.getElementById("complete-state");

        form.style.display = "none";
        completeState.style.display = "inherit";
        document.querySelector("main").style.marginTop = "18%";
        document.querySelector("main section #card-logo").style.marginBottom =
          "2%";
        document.querySelector("main section #number").style.marginTop = "-34%";
        document.querySelector("main section div").style.marginTop = "-24%";
        document.querySelector("main section #card-cvc").style.marginBottom =
          "-91%";
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

  handleClick = (event) => {
    event.preventDefault();

    document.querySelector("#complete-state").style.display = "none";
    document.querySelector("form").style.display = "inherit";
    document.querySelector("main").style.marginTop = "16%";
    document.querySelector("main section #card-logo").style.marginBottom = "6%";
    document.querySelector("main section #number").style.marginTop = "-38%";
    document.querySelector("main section div").style.marginTop = "-28%";
    document.querySelector("main section #card-cvc").style.marginBottom =
      "-94%";

    document.getElementById("cardholder-name").value = "";
    document.getElementById("card-number").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("cvc").value = "";

    this.setState({
      cardholder: "Jane Appleseed",
      cardNumber: "0000 0000 0000 0000",
      month: "00",
      year: "00",
      cvc: "000",
    });
  };

  render() {
    const { cardholder, cardNumber, month, year, cvc } = this.state;

    return (
      <main>
        <section>
          <img src={backCardImg} alt="Card Back" id="card-back" />
          <img src={frontCardImg} alt="Card Front" id="card-front" />
          <img src={cardLogo} alt="Card Logo" id="card-logo" />
          <p id="number">{cardNumber}</p>
          <div>
            <p id="name">{cardholder}</p>
            <p id="date">
              {month}/{year}
            </p>
          </div>
          <p id="card-cvc">{cvc}</p>
        </section>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Complete handleClick={this.handleClick} />
      </main>
    );
  }
}
