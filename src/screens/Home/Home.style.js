import { StyleSheet } from 'react-native';
import {
  container,
  contentContainerStyle
} from '../../themes/application.styles.js';

export default StyleSheet.create({
  container: {
    ...container
  },
  childContainer: {
    ...contentContainerStyle
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15
  },
  list: {
    flex: 1,
    marginTop: 70,
    paddingLeft: 15,
    marginBottom: 10
  },
  scrollableList: {
    marginTop: 15
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  deleteAllButton: {
    marginRight: 25
  }
});
