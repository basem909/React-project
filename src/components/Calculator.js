import React, { useState } from 'react';
import './Calculator.css';
import CalButton from './calButton';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [number, setNumber] = useState({ total: 0, next: null, operation: null });

  const clickHandler = (e) => {
    const result = calculate(number, e.target.id);
    setNumber(result);
  };

  return (
    <div className="cal-cont">
      <h2>Let&apos;s do some math</h2>
      <section className="clac-container">
        <p>
          {number.total}
          {' '}
          {number.operation}
          {' '}
          {number.next}
        </p>
        <section className="btn-container">
          <CalButton
            id="AC"
            type="button"
            className="btn"
            onClick={clickHandler}
          />

          <CalButton
            id="+/-"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="%"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="÷"
            type="button"
            className="btn orange"
            onClick={clickHandler}
          />
          <CalButton
            id="7"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="8"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="9"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="x"
            type="button"
            className="btn orange"
            onClick={clickHandler}
          />
          <CalButton
            id="4"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="5"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="6"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="-"
            type="button"
            className="btn orange"
            onClick={clickHandler}
          />
          <CalButton
            id="1"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="2"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="3"
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="+"
            type="button"
            className="btn orange"
            onClick={clickHandler}
          />
          <CalButton
            id="0"
            type="button"
            className="btn extend"
            onClick={clickHandler}
          />
          <CalButton
            id="."
            type="button"
            className="btn"
            onClick={clickHandler}
          />
          <CalButton
            id="="
            type="button"
            className="btn orange"
            onClick={clickHandler}
          />
        </section>
      </section>
    </div>
  );
};

export default Calculator;
