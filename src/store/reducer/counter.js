const intialStates = {
  value: 0,
};
function CounterReducer(state = intialStates, action) {
  switch (action.type) {
    case 'counter/increment':
      return {
        ...state,
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
export default CounterReducer;
