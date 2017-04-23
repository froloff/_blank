// import axios from 'axios';

import * as types from 'constants/Actions';

// Asynchronous Action
export function increment() {
  return {
    type: types.COUNTER_INCREMENT,
  };
}

// Synchronous Action
export function decrement() {
  return {
    type: types.COUNTER_DECREMENT,
  };
}
