import { StyleSheet } from "react-native";
import { colors } from "./colors";
// import styled from "styled-components/native";

/**
 * Variable constants
 */

// Font family for the application
export const appFontFamily = "Lato-Regular";
export const appFontFamilyMedium = "Lato-Medium";
export const appFontFamilyBold = "Lato-Bold";
export const appFontFamilyThin = "Lato-Thin";

// Font sizes for the application
export const textHeaders = 28;
export const textSubheaders = 22;
export const textSize = 18;


/**
 * Functional constants
 */

export const setMargin = (val) => StyleSheet.create({
    setMargin: { margin: val },
    setMarginRight: { marginRight: val },
    setMarginLeft: { marginLeft: val },
    setMarginTop: { marginTop: val },
    setMarginBottom: { marginBottom: val },
    setMarginHorizontal: { marginHorizontal: val },
    setMarginVertical: { marginVertical: val }
});

export const setPadding = (val) => StyleSheet.create({
    setPadding: { padding: val },
    setPaddingRight: { paddingRight: val },
    setPaddingLeft: { paddingLeft: val },
    setPaddingTop: { paddingTop: val },
    setPaddingBottom: { paddingBottom: val },
    setPaddingHorizontal: { paddingHorizontal: val },
    setPaddingVertical: { paddingVertical: val }
})


// Function to set font size
export const fontSize = (size) => StyleSheet.create({ setFontSize: { fontSize: size } })

// Function to set display
export const display = (display) => StyleSheet.create({ setDisplay: { display } })

// Function to set custom typeface for a particular page.
export const fontFamily = (fontFamily = appFontFamily) => StyleSheet.create({ setFontFamily: { fontFamily } })

// Function to set text color
export const textColor = (color) => StyleSheet.create({ setTextColor: { color } });

// Function to set custom css
export const customValue = (key, value) => StyleSheet.create({ setCustomValue: { [key]: value } });



// CTA backgrounds
export const ctaPrimary = () => StyleSheet.create({ 
    setCTAbgColor: { 
        backgroundColor: colors.primary_color,
        color: colors.secondary_color,
    } 
})
export const ctaSecondary = () => StyleSheet.create({
    setCTAbgColor: {
        backgroundColor: colors.secondary_color,
        color: colors.primary_color,
    }
})

// CTA text colors
export const ctaTextPrimary = () => StyleSheet.create({ 
    setCTAColor: { 
        color: colors.secondary_color,
    } 
})
export const ctaTextSecondary = () => StyleSheet.create({
    setCTAColor: {
        color: colors.primary_color,
    }
})

export const orSplit = StyleSheet.create({
    splitter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    splitLine: {
        borderBottomWidth: 1,
        borderBottomColor: colors.light_color,
        width: 160,
        marginTop: "auto",
        marginBottom: "auto",
    },
    orText: {
        fontSize: 20,
        fontFamily: appFontFamily,
        color: colors.light_color
    }
})