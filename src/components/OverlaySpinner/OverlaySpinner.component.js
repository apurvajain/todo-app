import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../themes/constants.styles';
import styles from './OverLaySpinner.style';

class OverlaySpinner extends Component {
  render() {
    const { showSpinner } = this.props;
    return showSpinner ? (
      <View style={styles.container}>
        <View style={styles.wrapperContainer}>
          <ActivityIndicator
            color={colors.PRIMARY_BG_TEXT_CONTRAST}
            size="large"
          />
        </View>
      </View>
    ) : null;
  }
}

OverlaySpinner.defaultProps = {
  showSpinner: 0
};

OverlaySpinner.propTypes = {
  showSpinner: PropTypes.number.isRequired
};

export default OverlaySpinner;
