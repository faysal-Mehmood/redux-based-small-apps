import { React, useState } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import {
  todoAdded,
  removetodo,
  todoCompleted,
  todoCompletedAll,
  todoClearAll,
} from '../../store/reducer/todoApp/todolist';
// import selectTodos from '../../store/reducer/todoApp/todolist';
const Index = () => {
  const todoitems = useSelector((state) => state.todos.entities);

  const todolist = Object.values(todoitems);
  const dispatch = useDispatch();
  const [text, settext] = useState('');
  const handleChange = (e) => {
    settext(e.target.value);
  };
  const todolistadded = (e) => {
    const trimText = e.target.value.trim();
    if (e.key === 'Enter' && trimText) {
      dispatch(todoAdded(trimText));
      settext('');
    }
  };
  const todoleft = () => {
    let count = 0;
    todolist.map((todo) => {
      if (todo.completed === false) {
        count++;
      }
      return count;
    });
    return count;
  };
  console.log('todolist', todolist);
  return (
    <div>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            onKeyDown={todolistadded}
          />
          {todolist.map((todo, key) => {
            return (
              <div className="todoapp">
                <input
                  type="checkbox"
                  id={key}
                  name={todo.text}
                  value={todo.text}
                  checked={todo.completed}
                  onChange={() => dispatch(todoCompleted(todo.id))}
                />
                <label for={todo.text}> {todo.text}</label>
                <button onClick={() => dispatch(removetodo(todo.id))}>x</button>
              </div>
            );
          })}
          <button onClick={() => dispatch(todoCompletedAll())}>
            completed all
          </button>
          <button onClick={() => dispatch(todoClearAll())}>clear all</button>
          <h5>
            item left: <span>{todoleft()}</span>
          </h5>
        </section>
      </main>
    </div>
  );
};

export default Index;
