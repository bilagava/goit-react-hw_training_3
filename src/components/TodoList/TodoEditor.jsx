import React, { Component } from 'react';
import style from '../TodoList/TodoList.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = evt => {
    this.setState({ message: evt.currentTarget.value });
  };

  hendleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };
  render() {
    return (
      <form className={style.TodoEditor} onSubmit={this.hendleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          className={style.TodoEditor__Text}
        ></textarea>
        <button
          type="submit"
          className={style.TodoEditor__button}
          disabled={!this.state.message}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
