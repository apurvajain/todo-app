import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes/constants.styles';

export default StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: fonts.FONT_SIZE_XL,
    color: colors.PRIMARY_BG_TEXT_CONTRAST,
    fontFamily: fonts.FONT_FAMILY_SEMIBOLD
  }
});
