import React, { useState } from 'react';
import './Calculator.css';
import CalButton from './calButton';
import calculate from '../logic/calculate';

const Calculator = () => {
 
    const [state,setState] = useState({ total: 0, next: null, operation: null });
    

  const clickHandler = (e) => {
    const result = calculate(state, e.target.id);
    setState(result);
  };

  
    return (
      <section className="clac-container">
        <p>
          {state.total}
          {' '}
          {state.operation}
          {' '}
          {state.next}
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
    );
  
}

export default Calculator;
