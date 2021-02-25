import React from 'react';
import { View } from 'react-native';
import { SubTitle } from '../../components';
import styles from './AppMaintainance.style';

const AppMaintainance = () => {
  return (
    <View style={styles.container}>
      <SubTitle subtitle="Sorry, app under maintenance!!" />
    </View>
  );
};

export default AppMaintainance;
