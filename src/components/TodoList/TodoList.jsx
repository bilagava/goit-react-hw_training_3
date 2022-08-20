import React from 'react';
import classNames from 'classnames';
import style from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleComplited }) => (
  <ul className={style.TodoList}>
    {todos.map(({ id, text, complited }) => (
      <li
        key={id}
        className={classNames(style.TodoListItem, {
          'style.TodoListItem__complited': complited,
        })}
      >
        <input
          type="checkbox"
          className="checkbox"
          checked={complited}
          onChange={() => onToggleComplited(id)}
        />
        <p className={style.TodoListText}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
