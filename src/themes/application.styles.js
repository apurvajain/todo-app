import { colors } from './constants.styles';

// All sytles common across the app goes here

export const container = {
  flex: 1,
  padding: 10,
  backgroundColor: colors.PRIMARY_APP_BG
};

export const contentContainerStyle = {
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'space-between'
};

export const appContainerStyle = {
  flexGrow: 1
};

export const statusBarStyle = {
  backgroundColor: colors.TRANSPARENT,
  barStyle: 'light-content'
};
