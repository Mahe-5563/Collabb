import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appFontFamily, appFontFamilyThin, textLabel, textSize, textSubheaders } from "./common";
import { marginCenter } from "./common";

export const homepageElements = StyleSheet.create({
    suggTitle: {
        fontSize: textSubheaders,
        fontFamily: appFontFamily,
    },
    followSuggCard: {
        backgroundColor: colors.white,
        height: 300,
        padding: 20,
        borderRadius: 5,
        width: 175,
        position: "relative",
    },
    suggCardTitle: {
        ...marginCenter,
        fontSize: textSize,
        marginTop: 20,
        textAlign: "center",
        color: colors.secondary_color_medium
    },
    suggCardRole: {
        ...marginCenter,
        fontSize: textLabel,
        marginTop: 5,
        textAlign: "center",
        color: colors.light_color
    }
})