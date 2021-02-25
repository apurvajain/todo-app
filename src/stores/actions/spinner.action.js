import { createAction } from 'redux-actions';

// SPINNER ACTIONS
export const SPINNER_SHOW = 'SPINNER_SHOW';
export const SPINNER_HIDE = 'SPINNER_HIDE';
export const SPINNER_RESET = 'SPINNER_RESET';

// SPINNER ACTIONS CREATORS
export const showSpinner = createAction(SPINNER_SHOW);
export const hideSpinner = createAction(SPINNER_HIDE);
export const resetSpinner = createAction(SPINNER_RESET);
