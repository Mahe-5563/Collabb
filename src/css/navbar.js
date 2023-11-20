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
        marginTop: "auto",
        marginBottom: "auto",
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
        // width: 80,
        display: "flex",
        flexDirection: "row",
    },
    title: {
        fontSize: 22,
        fontFamily: appFontFamily,
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: 10,
        marginRight: 15,
    }
});

export const homepageNavStyle = StyleSheet.create({
    container: {
        height: 170,
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
        // width: "80%"
    },
    profileImgPressable: {
        position: "absolute",
        right: 10,
        top: 40,
        // borderWidth: 1,
        // borderColor: colors.primary_color,
        alignItems: "center",
        padding: 5,
    },
    profileImg: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: colors.primary_color_dark,
        borderRadius: 50,
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