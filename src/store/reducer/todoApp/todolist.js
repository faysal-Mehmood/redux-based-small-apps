import { createSelector, createSlice } from '@reduxjs/toolkit';
const initialState = {
  entities: {
    0: { id: 0, text: 'Learn react js tutorial', completed: false },
    1: { id: 1, text: 'Learn html', completed: false, color: 'red' },
    2: {
      id: 2,
      text: 'Learn flutter tutorial',
      completed: false,
      color: 'green',
    },
  },
  filters: {
    status: 'active',
    colors: ['red', 'green', 'yellow'],
  },
};
// function todos(state = todostate, action) {
// switch (action.type) {
//   case 'todos/todoAdded': {
//     return {
//       ...state,
//       todos: [
//         ...state.todos,
//         {
//           id: Math.random(),
//           text: action.payload,
//           completed: false,
//         },
//       ],
//     };
//   }
//   case 'todos/todocompleted': {
//     return {
//       ...state,
//       todos: state.todos.map((todo) => {
//         if (todo.id !== action.payload) {
//           return todo;
//         }
//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       }),
//     };
//   }
//   case 'todos/removetodo': {
//     return {
//       ...state,
//       todos: state.todos.filter((todo) => {
//         if (todo.id !== action.payload) {
//           return todo;
//         }
//         return null;
//       }),
//     };
//   }
//   case 'todos/todocompletedall': {
//     return {
//       ...state,
//       todos: state.todos.map((todo) => {
//         return {
//           ...todo,
//           completed: true,
//         };
//       }),
//     };
//   }
//   case 'todos/todoclearall': {
//     return {
//       ...state,
//       todos: state.todos.map((todo) => {
//         return {
//           ...todo,
//           completed: false,
//         };
//       }),
//     };
//   }
//   default:
//     return state;
// }

// Normalized switch

// switch (action.type) {
//   case 'todos/todoAdded': {
//     const id = Math.floor(Math.random() * 10) + 3;
//     return {
//       ...state,
//       entities: {
//         ...state.entities,
//         [id]: {
//           id: id,
//           text: action.payload,
//           completed: false,
//         },
//       },
//     };
//   }
//   case 'todos/todocompleted': {
//     const todoid = action.payload;
//     const todo = state.entities[todoid];
//     return {
//       ...state,
//       entities: {
//         ...state.entities,
//         [todoid]: {
//           ...todo,
//           completed: !todo.completed,
//         },
//       },
//     };
//   }
//   case 'todos/removetodo': {
//     const newEntities = { ...state.entities };
//     delete newEntities[action.payload];
//     return {
//       ...state,
//       entities: newEntities,
//     };
//   }
//   case 'todos/todocompletedall': {
//     const entityArray = { ...state.entities };
//     Object.values(entityArray).forEach((entity) => {
//       entityArray[entity.id] = {
//         ...entity,
//         completed: true,
//       };
//     });
//     return {
//       ...state,
//       entities: entityArray,
//     };
//   }
//   case 'todos/todoclearall': {
//     const entityArray = { ...state.entities };
//     Object.values(entityArray).forEach((entity) => {
//       entityArray[entity.id] = {
//         ...entity,
//         completed: false,
//       };
//     });
//     return {
//       ...state,
//       entities: entityArray,
//     };
//   }

//   default:
//     return state;
// }

// }

// export default todos;

// create slice for redux toolkit

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const id = Math.floor(Math.random() * 10) + 3;
      const todo = {
        id: id,
        text: action.payload,
        completed: false,
      };
      state.entities[todo.id] = todo;
    },
    todoCompleted(state, action) {
      const todoid = action.payload;
      const todo = state.entities[todoid];
      todo.completed = !todo.completed;
    },
    todoCompletedAll(state, action) {
      Object.values(state.entities).map((entity) => (entity.completed = true));
    },
    todoClearAll(state, action) {
      Object.values(state.entities).map((entity) => (entity.completed = false));
    },
    removetodo(state, action) {
      const todoid = action.payload;
      delete state.entities[todoid];
    },
  },
});

export default todos.reducer;
export const {
  todoCompleted,
  removetodo,
  todoAdded,
  todoCompletedAll,
  todoClearAll,
} = todos.actions;
