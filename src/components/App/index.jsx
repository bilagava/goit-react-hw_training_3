import React, { Component } from 'react';
import shortid from 'shortid';

import Form from '../Form';
import ToduList from '../TodoList';
import TodoEditor from '../TodoList/TodoEditor';
import Filter from '../TodoList/Filter';
// import ColorPicker from 'components/ColorPicker';
// import Dropdown from 'components/Dropdown';
// import Counter from '../Counter';

// import Section from 'components/Section';
// import FeedbackOptions from 'components/FeedbackOptions';
// import Statistics from 'components/Statistics';
// import Notification from 'components/Notification';
import styles from './style.module.css';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', complited: false },
      { id: 'id-2', text: 'Todo-2', complited: true },
      { id: 'id-3', text: 'Todo-3', complited: false },
      { id: 'id-4', text: 'Todo-4', complited: true },
    ],
    inputValue: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      complited: false,
    };
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleComplited = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, complited: !todo.complited } : todo
      ),
    }));
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    const complitedTodoCount = todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0
    );

    return (
      <div className={styles.container}>
        {/* <Form onSubmit={this.formSubmitHandler} />
        <ColorPicker options={colorPickerOptions} /> */}
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ToduList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleComplited={this.toggleComplited}
        />
        {/* <Counter />
        <Dropdown /> */}
        <div>
          <p>Общее кол-во Todo:{totalTodoCount}</p>
          <p>Кол-во выполненых Todo:{complitedTodoCount}</p>
        </div>
      </div>
    );
  }
}

export default App;
