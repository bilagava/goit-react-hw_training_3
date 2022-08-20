import classNames from 'classnames';
import React, { Component } from 'react';
// import className from 'className';
import style from './style.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 2,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionsIdx];
    return (
      <div className={style.ColorPicker}>
        <h2 className={style.ColorPicker__title}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={classNames(style.ColorPicker__options, {
                'style.ColorPicker__options__active':
                  index === activeOptionsIdx,
              })}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
