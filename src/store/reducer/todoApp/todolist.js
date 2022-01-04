const todostate = {
  todos: [
    { id: 0, text: 'Learn react js tutorial', completed: false },
    { id: 1, text: 'Learn html', completed: false, color: 'red' },
    { id: 2, text: 'Learn flutter tutorial', completed: false, color: 'green' },
  ],
  filters: {
    status: 'active',
    colors: ['red', 'green', 'yellow'],
  },
};
function todos(state = todostate, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    case 'todos/todocompleted': {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    case 'todos/removetodo': {
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return null;
        }),
      };
    }
    case 'todos/todocompletedall': {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            completed: true,
          };
        }),
      };
    }
    case 'todos/todoclearall': {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            completed: false,
          };
        }),
      };
    }
    default:
      return state;
  }
}
// export const todos = useSelector(state);
// export const todoslist = (state) => {
//   return state.todos;
// };
export default todos;
