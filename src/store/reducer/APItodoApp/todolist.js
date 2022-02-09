import { client } from '../../../api/client';
const todostate = {
  status: 'idle',
  todos: [],
};
function apitodos(state = todostate, action) {
  switch (action.type) {
    case 'apitodos/todosLoaded': {
      return {
        ...state,
        status: 'idle',
        todos: action.payload,
      };
    }
    case 'apitodos/todosLoading': {
      return {
        ...state,
        status: 'loading',
      };
    }
    case 'apitodos/todoAdded': {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case 'apitodos/todocompleted': {
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
    case 'apitodos/removetodo': {
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
    case 'apitodos/todocompletedall': {
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
    case 'apitodos/todoclearall': {
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
// export const fetchTodos = () => async (dispatch) => {
//   const response = await client.get('/fakeApi/todos');
//   dispatch({ type: 'apitodos/todosLoaded', payload: response.todos });
// };
export default apitodos;
