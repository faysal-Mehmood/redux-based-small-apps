import { React, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveNewTodo,
  todoCompletedAll,
  todoClearAll,
  removetodo,
  todoCompleted,
} from '../../store/actions/apitodolist';

const Index = () => {
  const dispatch = useDispatch();
  const apistatus = useSelector((state) => state.apitodolist.status);
  const todolist = useSelector((state) => state.apitodolist.todos);
  const [text, settext] = useState('');
  const handleChange = (e) => {
    settext(e.target.value);
  };
  const todolistadded = (e) => {
    const trimText = e.target.value.trim();
    if (e.key === 'Enter' && trimText) {
      dispatch(saveNewTodo(trimText));
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
  if (apistatus === 'loading') {
    let timerInterval;
    Swal.fire({
      title: 'Updating Request!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }
  console.log(todolist);
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
