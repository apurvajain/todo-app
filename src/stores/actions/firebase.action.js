import { createAction } from 'redux-actions';
import { fetchRemoteConfig } from '../../utils/firebase.util';
import { showSpinner, hideSpinner } from './spinner.action';

export const SET_FIREBASE_REMOTE_CONFIG = 'SET_FIREBASE_REMOTE_CONFIG';

export const setFirebaseRemoteConfig = createAction(SET_FIREBASE_REMOTE_CONFIG);

export const initializeFirebase = () => async dispatch => {
  try {
    dispatch(showSpinner());
    const firebaseRemoteConfigData = await fetchRemoteConfig();
    dispatch(setFirebaseRemoteConfig(firebaseRemoteConfigData));
    dispatch(hideSpinner());
  } catch (error) {
    console.log('Firebase init error', error);
  }
};
