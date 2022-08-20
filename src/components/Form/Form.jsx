import React, { Component } from 'react';

class Form extends Component {
  state = { name: '', tag: '', expiriens: 'Senior', licence: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  hendleLicecnceChenge = evt => {
    this.setState({ licence: evt.currentTarget.checked });
  };
  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш уровень</p>
        <label>
          <input
            type="radio"
            name="expiriens"
            value={'Junior'}
            onChange={this.handleChange}
            checked={this.state.expiriens === 'Junior'}
          />
          Junior
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="expiriens"
            value={'Middle'}
            onChange={this.handleChange}
            checked={this.state.expiriens === 'Middle'}
          />
          Middle
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="expiriens"
            value={'Senior'}
            onChange={this.handleChange}
            checked={this.state.expiriens === 'Senior'}
          />
          Senior
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.hendleLicecnceChenge}
          />
          Согласен с условием
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
