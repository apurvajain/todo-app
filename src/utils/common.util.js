import { result } from 'lodash';
import { Dimensions, Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const { width, height } = Dimensions.get('window');

// An em() shortcut function referred from https://medium.com/@elieslama/responsive-design-in-react-native-876ea9cd72a8
export const em = value => {
  // Precalculate Device Dimensions for better performance
  const x = width;
  // Calculating ratio from iPhone breakpoints
  const ratioX = x < 375 ? (x <= 320 ? 0.75 : 0.875) : 1;
  // Base font size value
  const baseUnit = 16;
  // Simulating EM by changing font size according to Ratio
  const unit = baseUnit * ratioX;

  return unit * value;
};

export const getSelector = pathFromState => state =>
  result(state, pathFromState, null);
