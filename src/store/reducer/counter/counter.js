import { increment } from '../../actions/counter';
const intialStates = {
  value: 0,
};
function CounterReducer(state = intialStates, action) {
  switch (action.type) {
    case 'counter/increment':
      return {
        // ...state,
        // value: state.value + 1,
        value: state.value + 1,
      };
    case 'counter/decrement':
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
export const Count = (state) => state.Counter.value;
export const incrementIfOdd = () => (dispatch, getState) => {
  const currentValue = Count(getState());
  if (currentValue % 2 === 1) {
    dispatch(increment());
  }
};
// export const AsyncIncrement = () => (dispatch, getState) => {
//   const currentValue = Count(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(increment());
//   }
// };
export default CounterReducer;
