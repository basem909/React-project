import React, { Component } from "react";
import './Calculator.css'

class Calculator extends Component {
  render() {
    return (
      <section className="clac-container">
        <p>0</p>
        <section className="btn-container">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="orange">÷</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="orange">X</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="orange">-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="orange">+</button>
          <button id="extend">0</button>
          <button>.</button>
          <button className="orange">=</button>
        </section>
      </section>
    );
  }
}

export default Calculator;