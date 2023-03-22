import React, { Component } from "react";
import Form from "./Form";
import frontCardImg from "../img/bg-card-front.png";
import backCardImg from "../img/bg-card-back.png";
import "./Main.css";

export default class Main extends Component {
  handleChange = (event) => {
    event.preventDefault();

    const cardholder = document.getElementById("cardholder-name");
    const cardNumber = document.getElementById("card-number");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const cvc = document.getElementById("cvc");

    if (/e/i.test(cardNumber.value)) {
      cardNumber.style.border = "1px solid red";
    }

    if (
      cardholder.value == "" ||
      cardNumber.value == "" ||
      month.value == "" ||
      year.value == "" ||
      cvc.value == ""
    ) {
      console.log("ok");
    }
  };

  render() {
    return (
      <main>
        <section>
          <img src={backCardImg} alt="Card Back" />
          <img src={frontCardImg} alt="Card Front" />
        </section>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </main>
    );
  }
}
