import React, { Component } from 'react';
import { View } from 'react-native';
import { IS_ANNOUNCEMENTS_ON } from '../../configs/firebaseRemoteConfig.config';
import { getFeaturePage } from '../../utils/features.util';
import { SubTitle } from '../../components';
import styles from './Announcements.style';

const AnnouncementOn = () => {
  return (
    <View style={styles.container}>
      <SubTitle subtitle="On-going Promotions!!" />
    </View>
  );
};

const AnnouncementOff = () => {
  return (
    <View style={styles.container}>
      <SubTitle subtitle="Promotions- Coming Soon!!" />
    </View>
  );
};

class Announcements extends Component {
  render() {
    const FeaturePage = getFeaturePage(
      IS_ANNOUNCEMENTS_ON,
      AnnouncementOn,
      AnnouncementOff
    );
    const Page = FeaturePage;
    return <Page {...this.props} />;
  }
}

export default Announcements;
