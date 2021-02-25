import {
  FETCH_TODO_ITEMS_REQUEST,
  FETCH_TODO_ITEMS_SUCCESS,
  FETCH_TODO_ITEMS_FAILED,
  DELETE_TODO_ITEMS_SUCCESS,
  DELETE_TODO_ITEM_SUCCESS,
  TOGGLE_TODO_ITEM_SUCCESS,
  ADD_TODO_ITEM_SUCCESS
} from '../actions/todo.action';

const initialState = {
  items: []
};

export const todo = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_TODO_ITEMS_REQUEST:
      return {
        ...state
      };

    case FETCH_TODO_ITEMS_SUCCESS:
      return {
        ...state,
        items: payload
      };
    case FETCH_TODO_ITEMS_FAILED:
      return {
        ...state
      };
    case DELETE_TODO_ITEMS_SUCCESS:
      return {
        ...state,
        items: []
      };
    case DELETE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    case TOGGLE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === payload) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        })
      };
    case ADD_TODO_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload]
      };

    default:
      return state;
  }
};

export default todo;
