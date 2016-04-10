const initialState = {
  value: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'DECREMENT':
      return Object.assign({}, state, { value: state.value - 1 });
    case 'INCREMENT':
      return Object.assign({}, state, { value: state.value + 1 });
    default:
      return state;
  }
}
