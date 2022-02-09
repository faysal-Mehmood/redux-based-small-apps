import { client } from '../../api/client';
import Swal from 'sweetalert2';
export const todosLoaded = (todos) => {
  return {
    type: 'apitodos/todosLoaded',
    payload: todos,
  };
};
export const todosloading = () => {
  return {
    type: 'apitodos/todosLoading',
  };
};
// export const todosloading = () => ({ type: 'apitodos/todosLoading' });

export async function fetchTodos(dispatch, getState) {
  dispatch(todosloading());
  const response = await client.get('/fakeApi/todos');
  dispatch(todosLoaded(response.todos));
}
const todoAdded = (text) => {
  return {
    type: 'apitodos/todoAdded',
    payload: text,
  };
};
export const todoCompleted = (todoid) => ({
  type: 'apitodos/todocompleted',
  payload: todoid,
});
export const removetodo = (todoid) => ({
  type: 'apitodos/removetodo',
  payload: todoid,
});
export const todoCompletedAll = () => ({
  type: 'apitodos/todocompletedall',
});
export const todoClearAll = () => ({
  type: 'apitodos/todoclearall',
});
export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text };
    const response = await client.post('/fakeApi/todos', { todo: initialTodo });
    dispatch(todoAdded(response.todo));
    console.log('res', response);
  };
}
