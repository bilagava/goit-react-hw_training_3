import React from 'react';
import style from './style.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={style.Сounter__controls}>
    <button
      type="button"
      onClick={onIncrement}
      className={style.Сounter__button__increment}
    >
      Увеличить на 1 +
    </button>
    <button
      type="button"
      onClick={onDecrement}
      className={style.Сounter__button__decrement}
    >
      Уменьшить на 1 -
    </button>
  </div>
);

export default Controls;
