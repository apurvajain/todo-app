import { combineReducers } from 'redux';
import spinner from './spinner.reducer';
import firebase from './firebase.reducer';
import todo from './todo.reducer';

//insert another reducers here to be combined

const reducers = combineReducers({
  spinner,
  firebase,
  todo
});

export default reducers;
