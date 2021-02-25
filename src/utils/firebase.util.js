import remoteConfig from '@react-native-firebase/remote-config';
import firebaseRemoteConfig, {
  FETCH_INTERVAL_IN_MINUTES
} from '../configs/firebaseRemoteConfig.config';

// set defaults
remoteConfig().setDefaults(firebaseRemoteConfig);

// fetch remote config
export const fetchRemoteConfig = () => {
  // data is locally cached for FETCH_INTERVAL_IN_MINUTES
  const fetch = remoteConfig().fetch(FETCH_INTERVAL_IN_MINUTES * 1);
  return fetch
    .then(() => remoteConfig().activate())
    .then(() => {
      return remoteConfig().getAll();
    })
    .then(snapshot => {
      return {
        FORCE_UPDATE_APP_STORE_URL: snapshot.FORCE_UPDATE_APP_STORE_URL.asString(),
        IS_APPLICATION_ON: !!snapshot.IS_APPLICATION_ON.asBoolean(),
        IS_ANNOUNCEMENTS_ON: !!snapshot.IS_ANNOUNCEMENTS_ON.asBoolean()
      };
    })
    .catch(() => firebaseRemoteConfig);
};

export default fetchRemoteConfig;
