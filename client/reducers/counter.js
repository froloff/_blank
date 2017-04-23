import { COUNTER_DECREMENT, COUNTER_INCREMENT } from 'constants/Actions';

export default function counter(state = 0, action) {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - 1;
    case COUNTER_INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
