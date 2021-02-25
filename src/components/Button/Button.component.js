import React from 'react';
import { TouchableOpacity } from 'react-native';
import Proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { noop } from 'lodash';

const Button = ({ onPress, icon }) => (
  <TouchableOpacity onPress={onPress}>
    {icon ? (
      <Icon name={icon.name} size={icon.size} color={icon.color} />
    ) : null}
  </TouchableOpacity>
);

Button.defaultProps = {
  onPress: noop,
  icon: ''
};

Button.propTypes = {
  onPress: Proptypes.func,
  icon: Proptypes.object
};

export default Button;
