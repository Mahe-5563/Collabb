import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appFontFamily, appFontFamilyThin } from "./common";

export const navStyles = StyleSheet.create({
    navbar: {
        backgroundColor: colors.secondary_color,
        paddingTop: 60,
        paddingBottom: 30,
        paddingRight: 20,
        paddingLeft: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftSection: {
        display: "flex",
        flexDirection: "row",
        width: "80%"
    },
    text: {
        color: colors.primary_color,
        fontSize: 28,
        fontFamily: appFontFamily,
    },
    back: {
        margin: 15,
        marginTop: "auto",
        marginBottom: "auto"
    },
    notification: {
        display: "flex",
        marginTop: "auto",
        marginBottom: "auto"
    }
});

export const secondaryNavStyle = StyleSheet.create({
    secNavLayout: {
        backgroundColor: colors.primary_color_medium,
        paddingTop: 35,
        paddingBottom: 10,
    },
    backButton: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    }
});

export const homepageNavStyle = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: colors.secondary_color,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingTop: 30,
        padding: 10,
        position: "relative",
        // minHeight: 130,
    },
    titleSmall: {
        color: colors.primary_color,
        fontSize: 20,
        fontFamily: appFontFamilyThin,
    },
    titleBig: {
        color: colors.primary_color,
        fontSize: 28,
        fontFamily: appFontFamily,
    },
    profileImgPressable: {
        alignItems: "flex-end",
    },
    profileImg: {
        height: 60,
        width: 60,
    }
})

export const fixedBottomNavbar = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 70,
        paddingVertical: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopWidth: 1,
        borderTopColor: colors.grey_color
    },
    menuItem: {
        width: 90,
        padding: 7,
    },
    activeItem: {
        backgroundColor: colors.secondary_color_medium,
        borderRadius: 5,
    }
})