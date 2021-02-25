import { colors } from '../../themes/constants.styles.js';

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.BACKDROP_COLOR,
    zIndex: 99
  },
  wrapperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};
