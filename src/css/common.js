import { StyleSheet } from "react-native";
import { colors } from "./colors";
// import styled from "styled-components/native";

// Font family for the application
export const appFontFamily = "Lato-Regular";
export const appFontFamilyMedium = "Lato-Medium";
export const appFontFamilyBold = "Lato-Bold";
export const appFontFamilyThin = "Lato-Thin";

// Function to set margin on all sides
export const margin = (val) => StyleSheet.create({ setMargin: { margin: val } })

// Function to set margin on right side
export const marginRight = (val) => StyleSheet.create({ setMarginRight: { marginRight: val } })

// Function to set margin on left side
export const marginLeft = (val) => StyleSheet.create({ setMarginLeft: { marginLeft: val } })

// Function to set margin on top
export const marginTop = (val) => StyleSheet.create({ setMarginTop: { marginTop: val } })

// Function to set margin at bottom
export const marginBottom = (val) => StyleSheet.create({ setMarginBottom: { marginBottom: val } })

// Function to set margin horizontal --
export const marginHorizontal = (val) => StyleSheet.create({ setMarginHorizontal: { marginHorizontal: val } })

// Function to set margin vertical |
export const marginVertical = (val) => StyleSheet.create({ setMarginVertical: { marginVertical: val } })



// Function to set padding on all sides
export const padding = (val) => StyleSheet.create({ setPadding: { padding: val } })

// Function to set padding on right side
export const paddingRight = (val) => StyleSheet.create({ setPaddingRight: { paddingRight: val } })

// Function to set padding on left side
export const paddingLeft = (val) => StyleSheet.create({ setPaddingLeft: { paddingLeft: val } })

// Function to set padding on top
export const paddingTop = (val) => StyleSheet.create({ setPaddingTop: { paddingTop: val } })

// Function to set padding at bottom
export const paddingBottom = (val) => StyleSheet.create({ setPaddingBottom: { paddingBottom: val } })

// Function to set padding horizontal --
export const paddingHorizontal = (val) => StyleSheet.create({ setPaddingHorizontal: { paddingHorizontal: val } })

// Function to set padding vertical |
export const paddingVertical = (val) => StyleSheet.create({ setPaddingVertical: { paddingVertical: val } })



// Function to set font size
export const fontSize = (size) => StyleSheet.create({ setFontSize: { fontSize: size } })

// Function to set display
export const display = (display) => StyleSheet.create({ setDisplay: { display } })

// Function to set custom typeface for a particular page.
export const fontFamily = (fontFamily = appFontFamily) => StyleSheet.create({ setFontFamily: { fontFamily } })

// Function to set text color
export const textColor = (color) => StyleSheet.create({ setTextColor: { color } });



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