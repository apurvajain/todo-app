import {
  SPINNER_HIDE,
  SPINNER_RESET,
  SPINNER_SHOW
} from '../actions/spinner.action';

// Initial State for spinner
const initialState = { count: 0 };

const spinner = (state = initialState, action) => {
  switch (action.type) {
    case SPINNER_SHOW: {
      return { count: state.count + 1 };
    }
    case SPINNER_HIDE: {
      // the value of count should always be positive
      const spinnerCount = state.count > 0 ? state.count - 1 : 0;
      return { count: spinnerCount };
    }
    case SPINNER_RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default spinner;
