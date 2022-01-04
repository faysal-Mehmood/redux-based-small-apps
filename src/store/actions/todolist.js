export const todoAdded = (todoText) => ({
  type: 'todos/todoAdded',
  payload: todoText,
});
export const todoCompleted = (todoid) => ({
  type: 'todos/todocompleted',
  payload: todoid,
});
export const removetodo = (todoid) => ({
  type: 'todos/removetodo',
  payload: todoid,
});
export const todoCompletedAll = () => ({
  type: 'todos/todocompletedall',
});
export const todoClearAll = () => ({
  type: 'todos/todoclearall',
});
export const todoleft = () => ({
  type: 'todos/todoleft',
});
