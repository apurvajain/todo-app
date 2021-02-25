import React from 'react';
import { Text } from 'react-native';
import Proptypes from 'prop-types';
import { colors } from '../../themes/constants.styles';
import styles from './SubTitle.style';

const SubTitle = ({ subtitle }) => (
  <Text
    accessible={true}
    accessibilityLabel={subtitle}
    style={[styles.titleText, { color: colors.SECONDARY_TEXT }]}>
    {subtitle.toUpperCase()}
  </Text>
);

SubTitle.defaultProps = {
  subtitle: ''
};

SubTitle.propTypes = {
  subtitle: Proptypes.string
};

export default SubTitle;
