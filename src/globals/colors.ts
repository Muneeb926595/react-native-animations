/**
 * naming variants of color
 *
 *    ^
 *    |       lightStroke:  lightest version of base
 * lightest   mediumStroke:  lighter version of base
 *    |       stroke: slight lighter version of base
 *    +       base: base color
 *    |       tint: slight dark version of base
 * darkest    tone: darker version of base
 *    |       shade: darkest version of base
 *    v
 *
 * eg, variants of blue from lightest to darkest:
 * lightStrokeBlue, mediumStrokeBlue, stokeBlue, blue, tintBlue, toneBlue, shadeBlue
 */

/** base colors */
const blue = '#008DFF';
const blueGray = '#D0D9E4';
const green = '#26CFA2';
const purple = '#907AF8';
const orange = '#FF8933';
const red = '#FF5757';
const pink = '#E91293';
const white = '#FFFFFF';
const black = '#00051E';
const prussianBlue = '#0D3F65';
const yellow = '#FABC3C';
const mustard = '#D4B301';

/** others */
const lightOrange = '#FF9640';
const darkOrange = '#CC5600';
const shadowGreen = '#1DAD87';
const dark = '#303851';
const medium = '#73798A';
const light = '#AEB3B9';
const iceBlue = '#f0f8ff';
const background = '#E9F2FB';
const paleWhite = '#F1F0F0';
const transparentGray = '#00000066';
const transparentLightGray = '#0000001A';
const weirdGreen = '#47d287';
const lightYellow = '#FDE049';

/** strokes */
const strokeGreen = '#E9FAF5';
const stroke = '#D4D9DF';
const mediumStroke = '#E5E6E9';
const lightStroke = '#F2F2F3';
const lighterStroke = '#F7F7F7';
const lightestStroke = '#F1F1F1';

/** tints */
const tintColor = '#2F95DC';
const tintBlue = '#DCEFFC';
const tintPurple = '#F5F3FF';
const tintOrange = '#FFF3EA';
const tintRed = '#FFF6F6';
const tintWhite = '#F8F8F8';
const tintGreen = '#F4FCFA';
const tintYellow = '#FFF7EB';

/** Opaques */
const opaqueGray = '#94ABC5';
const paleGray = '#F5FAFF';

/** tones */
const toneBlue = '#C5E4FC';

export const Colors = {
  /** base colors */
  blue: blue,
  blueGray: blueGray,
  green: green,
  purple: purple,
  orange: orange,
  pink,
  white: white,
  black: black,
  red: red,
  prussianBlue: prussianBlue,
  yellow: yellow,

  /** tints */
  tintWhite: tintWhite,
  tintBlue: tintBlue,
  tintPurple: tintPurple,
  tintOrange: tintOrange,
  tintRed: tintRed,
  tintGreen: tintGreen,
  tintYellow: tintYellow,

  /** strokes */
  strokeGreen: strokeGreen,

  /** tones */
  toneBlue: toneBlue,

  /** others */
  paleWhite: paleWhite,
  shadowGreen: shadowGreen,
  transparent: 'transparent',
  transparentGray: transparentGray,
  transparentLightGray: transparentLightGray,
  lightOrange: lightOrange,
  darkOrange: darkOrange,
  lightYellow: lightYellow,
  lighterStrokeYellow: mustard,
  iceBlue: iceBlue,
  weirdGreen: weirdGreen,

  /** Opaque Button */
  opaqueGray: opaqueGray,
  paleGray: paleGray,

  //Grays
  darkGray: dark,
  mediumGray: medium,
  lightGray: light,
  strokeGray: stroke,
  lighterStrokeGray: lighterStroke,
  lightestStrokeGray: lightestStroke,
  lightStrokeGray: lightStroke,
  mediumStrokeGray: mediumStroke,

  primaryButton: {
    backgroundColor: green,
    color: white,
    shadow: '#1DAD87',
  },
  secondaryButton: {
    backgroundColor: white,
    color: blue,
    borderColor: blue,
  },
  featureTextLink: {
    color: blue,
    underline: blue,
    icon: green,
  },
  primaryTextLink: {
    color: blue,
    icon: blue,
  },
  textLink: {
    color: blue,
  },
  error: {
    backgroundColor: tintOrange,
    color: orange,
    icon: orange,
  },
  labelHighlight: {
    backgroundColor: tintPurple,
    color: purple,
  },
  labelDisabled: {
    backgroundColor: mediumStroke,
    color: light,
  },
  text: dark,

  tintColor: '#2f95dc',
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  background: white,
  inputText: '#333',
  titleText: '#333',
  border: '#ddd',

  appBackground: white,
  header: {
    backgroundColor: white,
    shadowColor: light,
  },
  icon: blue,
  iconSelected: purple,

  //skeletons
  skeletonHighlightColor: '#E1E9EE',
};
