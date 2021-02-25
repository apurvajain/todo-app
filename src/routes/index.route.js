import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import HomeScreens from './home.route';
import MaintenanceScreens from './appMaintenance.route';
import { IS_APPLICATION_ON } from '../configs/firebaseRemoteConfig.config';
import { colors } from '../themes/constants.styles';

// const customDarkTheme = {
//   // ...DarkTheme,
//   dark: false,
//   colors: {
//     ...DarkTheme.colors
//   }
// };

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: colors.PRIMARY_HEADER_BG,
    text: colors.PRIMARY_APP_BG
  }
};

export const Route = () => {
  const isApplicationOn = useSelector(
    state => state.firebase[IS_APPLICATION_ON]
  );
  return (
    <NavigationContainer theme={customDefaultTheme}>
      {isApplicationOn ? (
        <HomeScreens options={{ animationEnabled: false }} />
      ) : (
        <MaintenanceScreens options={{ animationEnabled: false }} />
      )}
    </NavigationContainer>
  );
};
