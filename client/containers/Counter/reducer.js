import { DECREMENT, INCREMENT } from './constants';

export default function counter(state = 0, action) {
  switch (action.type) {
    case DECREMENT:
      return state > 0 ? state - 1 : state;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
