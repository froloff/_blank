// import axios from 'axios';

import * as types from 'constants/Actions';

// Asynchronous Action
export function decrement() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: types.COUNTER_DECREMENT,
      });
    });
  };
}

// Synchronous Action
export function increment() {
  return {
    type: types.COUNTER_INCREMENT,
  };
}
