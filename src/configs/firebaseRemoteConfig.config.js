// according to the documentation we can make a request only 5 times per hour => every 12 minutes
// https://firebase.google.com/docs/remote-config/ios
export const FETCH_INTERVAL_IN_MINUTES = 12;

// Feature names constants, use them to reference to a feature
export const IS_APPLICATION_ON = 'IS_APPLICATION_ON';
export const IS_ANNOUNCEMENTS_ON = 'IS_ANNOUNCEMENTS_ON';

const config = {
  FORCE_UPDATE_APP_STORE_URL:
    'https://itunes.apple.com/in/app/rn-firebase/id394602822?mt=8'
};
config[IS_APPLICATION_ON] = false;
config[IS_ANNOUNCEMENTS_ON] = false;

export default config;
