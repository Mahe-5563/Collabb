import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appFontFamily } from "./common";

export const navStyles = StyleSheet.create({
    navbar: {
        backgroundColor: colors.secondary_color,
        paddingTop: 60,
        paddingBottom: 30,
        paddingRight: 20,
        paddingLeft: 20,
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
