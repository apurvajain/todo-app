import { em, isIOS } from '../utils/common.util';

export const fonts = {
  // ==================
  //  FONT TYPE
  // ==================
  FONT_FAMILY_REGULAR: 'RobotoMono-Regular',
  FONT_FAMILY_LIGHT: 'RobotoMono-Light',
  FONT_FAMILY_BOLD: 'RobotoMono-Bold',
  FONT_FAMILY_MEDIUM: 'RobotoMono-Medium',
  FONT_FAMILY_SEMIBOLD: 'RobotoMono-SemiBold',
  FONT_FAMILY_THIN: 'RobotoMono-Thin',

  // ==================
  //  FONT SIZE
  // ==================
  FONT_SIZE_XS: em(0.625), // 10
  FONT_SIZE_SMALLER: em(0.75), // 12
  FONT_SIZE_SMALL: em(0.875), // 14
  FONT_SIZE_NORMAL: em(1), // 16
  FONT_SIZE_MEDIUM: em(1.125), // 18
  FONT_SIZE_SEMILARGE: em(1.25), // 20
  FONT_SIZE_LARGE: em(1.375), // 22
  FONT_SIZE_XL: em(1.5), // 24
  FONT_SIZE_XXL: em(1.875), // 30
  FONT_SIZE_XXXL: em(2.25), // 36

  // ==================
  //  TEXT PROPERTIES
  // ==================
  TEXT_ELLIPSIZE_MODE: 'tail'
};

// ==================
//  COLORS
// ==================
export const colors = {
  PRIMARY_ACTIVE: '#f6c751',
  PRIMARY_INACTIVE: '#555555',
  PRIMARY_TEXT: '#555555',
  SECONDARY_TEXT: '#c4c4cc',
  PRIMARY_ACTIONABLE: '#bc2e4c',
  PRIMARY_BG_SEPARATOR: '#f4e4e2',
  PRIMARY_BG_TEXT_CONTRAST: '#FFFFFF',
  PRIMARY_HEADER_BG: '#f6c751',
  PRIMARY_APP_BG: '#1C2326',
  TRANSPARENT: 'transparent',
  SHADOW: '#303C46',
  BACKDROP_COLOR: 'rgba(48,60,70,1)'
};

// ==================
//  DIMENSIONS
// ==================
export const dimensions = {
  RADIUS: 8,
  SHADOW_OPACITY: 0.8,
  SHADOW_RADIUS: 2,
  SHADOW_OFFSET: {
    width: 0,
    height: 1
  },
  PADDING_PAGE: 16,
  DEFAULT_KEYBOARD_EXTRA_HEIGHT: isIOS ? 75 : 35
};
