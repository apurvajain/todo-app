import React from 'react';
import { TextInput } from 'react-native';
import Proptypes from 'prop-types';
import { noop } from 'lodash';
import { colors } from '../../themes/constants.styles';
import styles from './Input.style';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    accessibilityLabel={'Type here to add a to do'}
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Add a todo..."
    placeholderTextColor={colors.PRIMARY_BG_TEXT_CONTRAST}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={colors.PRIMARY_BG_TEXT_CONTRAST}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
  />
);

Input.defaultProps = {
  onChangeText: noop,
  onDoneAddItem: noop,
  inputValue: ''
};

Input.propTypes = {
  onChangeText: Proptypes.func.isRequired,
  onDoneAddItem: Proptypes.func.isRequired,
  inputValue: Proptypes.string.isRequired
};

export default Input;
