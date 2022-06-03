import React, { Component } from "react";
import "./Calculator.css";
import CalButton from "./calButton";
import calculate from "../logic/calculate";
import { operation } from "retry";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = (e) => {
    const result = calculate(this.state, e.target.id);
    this.setState(result);
  };
  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="clac-container">
        <p>
          {total} {operation} {next}
        </p>
        <section className="btn-container">
          <CalButton
            id="AC"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />

          <CalButton
            id="+/-"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="%"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="÷"
            type="button"
            className="btn orange"
            onClick={this.clickHandler}
          />
          <CalButton
            id="7"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="8"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="9"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="x"
            type="button"
            className="btn orange"
            onClick={this.clickHandler}
          />
          <CalButton
            id="4"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="5"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="6"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="-"
            type="button"
            className="btn orange"
            onClick={this.clickHandler}
          />
          <CalButton
            id="1"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="2"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="3"
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="+"
            type="button"
            className="btn orange"
            onClick={this.clickHandler}
          />
          <CalButton
            id="0"
            type="button"
            className="btn extend"
            onClick={this.clickHandler}
          />
          <CalButton
            id="."
            type="button"
            className="btn"
            onClick={this.clickHandler}
          />
          <CalButton
            id="="
            type="button"
            className="btn orange"
            onClick={this.clickHandler}
          />
        </section>
      </section>
    );
  }
}

export default Calculator;
