import React, { Component } from "react";
import Form from "./Form";
import frontCardImg from "../img/bg-card-front.png";
import backCardImg from "../img/bg-card-back.png";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <main>
        <section>
          <img src={backCardImg} alt="Card Back" />
          <img src={frontCardImg} alt="Card Front" />
        </section>
        <Form />
      </main>
    );
  }
}
