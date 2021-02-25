import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppMaintenance from '../screens/AppMaintainance/AppMaintainance.screen';

const Stack = createStackNavigator();
const MaintenanceStack = createStackNavigator();

const MaintenanceScreens = () => (
  <MaintenanceStack.Navigator>
    <Stack.Screen
      name="Login"
      component={AppMaintenance}
      options={{ headerShown: false }}
    />
  </MaintenanceStack.Navigator>
);

export default MaintenanceScreens;
