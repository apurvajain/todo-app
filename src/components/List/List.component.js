import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { noop } from 'lodash';
import { colors } from '../../themes/constants.styles';
import styles from './List.style';

class List extends Component {
  render() {
    const { text, isCompleted, deleteItem, toggleItem } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity
            accessible={isCompleted ? false : true}
            accessibilityLabel={`Completed ${text}`}
            accessibilityRole={'button'}
            accessibilityStates={['selected']}
            accessibilityHint={`This will mark ${text} as done`}
            onPress={() => toggleItem()}>
            <View
              style={[
                styles.circle,
                isCompleted
                  ? {
                      borderColor: colors.PRIMARY_ACTIVE,
                      backgroundColor: colors.PRIMARY_ACTIVE
                    }
                  : { borderColor: colors.PRIMARY_INACTIVE }
              ]}
            />
          </TouchableOpacity>
          <Text
            accessible={false}
            style={[
              styles.text,
              isCompleted
                ? {
                    color: colors.SECONDARY_TEXT,
                    textDecorationLine: 'line-through'
                  }
                : { color: colors.PRIMARY_TEXT }
            ]}>
            {text}
          </Text>
        </View>
        {isCompleted ? (
          <View style={styles.button}>
            <TouchableOpacity
              accessible={isCompleted ? true : false}
              accessibilityLabel={`Delete ${text}`}
              accessibilityRole={'button'}
              accessibilityHint={`This will delete item ${text}`}
              onPressOut={deleteItem}>
              <Icon
                name={'remove-circle'}
                size={24}
                color={colors.PRIMARY_ACTIONABLE}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

List.defaultProps = {
  text: '',
  isCompleted: false,
  toggleItem: noop,
  deleteItem: noop
};

List.propTypes = {
  text: Proptypes.string,
  isCompleted: Proptypes.bool,
  toggleItem: Proptypes.func,
  deleteItem: Proptypes.func
};

export default List;
