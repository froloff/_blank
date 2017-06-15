import { DECREMENT, INCREMENT } from './constants';

// Asynchronous Action
export function decrement() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DECREMENT,
      });
    });
  };
}

// Synchronous Action
export function increment() {
  return {
    type: INCREMENT,
  };
}
