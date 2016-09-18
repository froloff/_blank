import { DECREMENT, INCREMENT } from '../constants/Counter';

// Synchronous Action
export function decrement() {
  return {
    type: DECREMENT,
  };
}

// Another Synchronous Action
export function increment() {
  return {
    type: INCREMENT,
  };
}
