import RemoteConfigDefault from '../../configs/firebaseRemoteConfig.config';
const initialState = { ...RemoteConfigDefault };

export const firebase = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_FIREBASE_REMOTE_CONFIG':
      return { ...payload };
    default:
      return state;
  }
};

export default firebase;
