import { PixelRatio, Platform } from 'react-native';
import { Layout } from './layout';

const primaryFont = Platform.OS === 'ios' ? 'ModernEra-Regular' : 'modern-era-regular';
const secondaryFont = Platform.OS === 'ios' ? 'ModernEra-Medium' : 'modern-era-medium';
const tertiaryFont = Platform.OS === 'ios' ? 'HelveticaNeueBold' : 'helvetica-neu-bold';

export const fontScale = PixelRatio.getFontScale();

/**
 * Note.
 * In order to handle font scaling gracefully, all font styles with
 * "fontSize" prop must have one of these
 * (fontScaleEquilizer or fontScaleFactor) multipliers
 */

/** Use for styles that should NOT scale based on device font size */
let fontScaleEquilizer = 1 / fontScale;

/** Use for styles that should scale  based on device font size */
const fontScaleFactor = 1 - Math.log10(fontScale);

fontScaleEquilizer = Platform.select({
  ios: fontScaleEquilizer,
  android: fontScaleFactor
})

export const Fonts = {
  heading1: {
    fontFamily: primaryFont,
    fontSize: 36 * fontScaleEquilizer,
  },
  heading2: {
    fontFamily: `${primaryFont}`,
    fontSize: 28 * fontScaleEquilizer,
  },
  heading3Regular: {
    fontFamily: `${primaryFont}`,
    fontSize: 23 * fontScaleEquilizer,
    letterSpacing: 0,
  },
  heading3: {
    fontFamily: `${secondaryFont}`,
    fontSize: 23 * fontScaleEquilizer,
    letterSpacing: 1,
    // textTransform: 'uppercase' // Why react native dont support this but doc says so otherwise
  },
  heading4: {
    fontFamily: `${secondaryFont}`,
    fontSize: 20 * fontScaleEquilizer,
  },
  heading5: {
    fontFamily: `${secondaryFont}`,
    fontSize: 18 * fontScaleEquilizer,
  },
  paragraphLarge: {
    fontFamily: `${primaryFont}`,
    fontSize: 20 * fontScaleEquilizer,
  },
  paragraphBold: {
    fontFamily: `${secondaryFont}`,
    fontSize: 16 * fontScaleFactor,
  },
  paragraph: {
    fontFamily: `${primaryFont}`,
    fontSize: 16 * fontScaleFactor,
  },
  paragraphSmall: {
    fontFamily: `${primaryFont}`,
    fontSize: 14 * fontScaleFactor,
  },
  paragraphTiny: {
    fontFamily: `${primaryFont}`,
    fontSize: 12 * fontScaleFactor,
  },
  paragraphLink: {
    fontFamily: `${primaryFont}`,
    fontSize: 16 * fontScaleFactor,
    // textTransform: 'uppercase'
  },
  paragraphLinkBold: {
    fontFamily: `${secondaryFont}`,
    fontSize: 16 * fontScaleFactor,
    // textTransform: 'uppercase'
  },
  bold: {
    fontFamily: `${secondaryFont}`,
  },
  micro: {
    fontFamily: `${primaryFont}`,
    fontSize: 12 * fontScaleFactor,
  },
  microBold: {
    fontFamily: `${secondaryFont}`,
    fontSize: 12 * fontScaleFactor,
  },
  tertiary: {
    fontFamily: `${tertiaryFont}`,
  },
};
