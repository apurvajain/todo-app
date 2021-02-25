import { createAction } from 'redux-actions';
import { getTodoItems } from '../../api/baseTodoTasks';
import { hideSpinner, showSpinner } from './spinner.action';

export const FETCH_TODO_ITEMS_REQUEST = 'FETCH_TODO_ITEMS_REQUEST';
export const FETCH_TODO_ITEMS_SUCCESS = 'FETCH_TODO_ITEMS_SUCCESS';
export const FETCH_TODO_ITEMS_FAILED = 'FETCH_TODO_ITEMS_FAILED';
export const DELETE_TODO_ITEMS_SUCCESS = 'DELETE_TODO_ITEMS_SUCCESS';
export const DELETE_TODO_ITEM_SUCCESS = 'DELETE_TODO_ITEM_SUCCESS';
export const TOGGLE_TODO_ITEM_SUCCESS = 'TOGGLE_TODO_ITEM_SUCCESS';
export const ADD_TODO_ITEM_SUCCESS = 'ADD_TODO_ITEM_SUCCESS';

export const fetchTodoItemsRequest = createAction(FETCH_TODO_ITEMS_REQUEST);
export const fetchTodoItemsSuccess = createAction(FETCH_TODO_ITEMS_SUCCESS);
export const fetchTodoItemsFail = createAction(FETCH_TODO_ITEMS_FAILED);
export const deleteTodoItemsSuccess = createAction(DELETE_TODO_ITEMS_SUCCESS);
export const deleteTodoItemSuccess = createAction(DELETE_TODO_ITEM_SUCCESS);
export const toggleTodoItemSuccess = createAction(TOGGLE_TODO_ITEM_SUCCESS);
export const addTodoItemSuccess = createAction(ADD_TODO_ITEM_SUCCESS);

export const deleteTodoItems = () => async dispatch => {
  try {
    dispatch(deleteTodoItemsSuccess());
  } catch (error) {
    console.log('unable to detele all items');
  }
};

export const deleteTodoItem = id => async dispatch => {
  try {
    dispatch(deleteTodoItemSuccess(id));
  } catch (error) {
    console.log('unable to detele item');
  }
};

export const toggleTodoItem = id => async dispatch => {
  try {
    dispatch(toggleTodoItemSuccess(id));
  } catch (error) {
    console.log('unable to mark item comsplete');
  }
};

export const addTodoItem = item => async dispatch => {
  try {
    dispatch(addTodoItemSuccess(item));
  } catch (error) {
    console.log('unable to add todo item');
  }
};

export const fetchTodoItems = () => async dispatch => {
  try {
    dispatch(showSpinner());
    dispatch(fetchTodoItemsRequest());
    const { data } = await getTodoItems();
    dispatch(fetchTodoItemsSuccess(data));
    dispatch(hideSpinner());
  } catch (error) {
    dispatch(fetchTodoItemsFail());
    dispatch(hideSpinner());
  }
};
