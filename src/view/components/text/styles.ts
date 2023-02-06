
// https://material.io/design/typography/the-type-system.html#type-scale

import { StyleSheet } from "react-native";

import { Colors, Fonts, Layout } from "../../../globals";

export const styles = StyleSheet.create({
    subtitle1: {
        fontSize: 16,
        letterSpacing: 0.15,
        fontWeight: 'normal',
    },
    subtitle2: {
        fontSize: 14,
        letterSpacing: 0.1,
        fontWeight: '500',
    },
    body1: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: 'normal',
    },
    body2: {
        fontSize: 14,
        letterSpacing: 0.25,
        fontWeight: 'normal',
    },
    button: {
        fontSize: 14,
        letterSpacing: 1.25,
        fontWeight: '500',
    },
    caption: {
        fontSize: 12,
        letterSpacing: 0.4,
        fontWeight: 'normal',
    },
    overline: {
        fontSize: 10,
        letterSpacing: 1.5,
        fontWeight: 'normal',
    },
    headingWrapper: {
        paddingBottom: Layout.medium,
    },
    heading1: {
        ...Fonts.heading1,
        color: Colors.green,
        marginBottom: Layout.small,
    },
    heading2: {
        ...Fonts.heading2,
        color: Colors.text,
        marginBottom: Layout.small,
    },
    heading3: {
        ...Fonts.heading3,
        color: Colors.text,
        marginBottom: Layout.mini,
    },
    heading4: {
        ...Fonts.heading4,
        marginBottom: Layout.mini,
    },
    heading5: {
        ...Fonts.heading5,
        color: Colors.text,
        marginBottom: Layout.mini,
    },
    heading6: {
        fontSize: 20,
        letterSpacing: 0.15,
        fontWeight: '500',
    },
    paragraph: {
        ...Fonts.paragraph,
        color: Colors.text,
        marginBottom: Layout.mini,
    },
    paragraphBold: {
        ...Fonts.paragraphBold,
        color: Colors.text,
    },
    paragraphLarge: {
        ...Fonts.paragraphLarge,
        color: Colors.text,
    },
    paragraphSmall: {
        ...Fonts.paragraphSmall,
        color: Colors.text,
    },
    paragraphTiny: {
        ...Fonts.paragraphTiny,
        color: Colors.text,
    },
    paragraphLink: {
        ...Fonts.paragraphLink,
        color: Colors.blue,
    },
    paragraphLinkBold: {
        ...Fonts.paragraphLinkBold,
        color: Colors.blue,
    },
    textLink: {
        color: Colors.blue,
        ...Fonts.bold,
        paddingVertical: Layout.mini,
    },
    micro: {
        ...Fonts.micro,
        color: Colors.text,
    },
});

export const StyledTextStyles = styles;