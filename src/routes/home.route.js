import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Announcements from '../screens/Announcements/Announcements.screen';
import Home from '../screens/Home/Home.screen';

import { colors, fonts } from '../themes/constants.styles';

const Stack = createStackNavigator();
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Announcements') {
            iconName = focused ? 'ios-megaphone' : 'ios-megaphone-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY_APP_BG,
        inactiveTintColor: colors.PRIMARY_APP_BG,
        labelStyle: {
          fontSize: fonts.FONT_SIZE_XS,
          fontFamily: fonts.FONT_FAMILY_NORMAL
        }
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Announcements"
        component={Announcements}
        options={{ tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
};

const AppScreens = () => (
  <AppStack.Navigator
    screenOptions={() => ({
      headerStyle: {
        backgroundColor: colors.PRIMARY_HEADER_BG
      },
      headerTitleStyle: {
        color: colors.PRIMARY_APP_BG,
        fontSize: fonts.FONT_SIZE_XL,
        fontFamily: fonts.FONT_FAMILY_BOLD
      }
    })}>
    <Stack.Screen
      name="Home"
      component={MyTabs}
      options={{
        title: "Let's Todo"
      }}
    />
  </AppStack.Navigator>
);

export default AppScreens;
