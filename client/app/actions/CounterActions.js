import { DECREMENT, INCREMENT } from 'app/constants/Counter';

// Synchronous Action
export function decrement() {
  return {
    type: DECREMENT,
  };
}

// Asynchronous Action
export function increment() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT,
      });
    }, 1000);
  };
}
