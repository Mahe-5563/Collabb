import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appFontFamily } from "./common";

const inputFieldBox = {
    borderColor: colors.secondary_color,
    borderStyle: "solid",
    borderWidth: 1,
    paddingRight: 18,
    paddingLeft: 18,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 5,
    borderRadius: 5,
    fontSize: 18,
}

export const inputStyles = StyleSheet.create({
    inputView: {
        ...inputFieldBox,
        display: "flex",
        flexDirection: "row",
    },
    interactableIcon: {
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: 15,
    },
    inputField: {
        fontSize: 18,
        fontFamily: appFontFamily,
        width: "100%"
    },
    multilineInputView: {
        ...inputFieldBox,
        maxHeight: 170,
        fontFamily: appFontFamily,
    }
})

export const dropdownStyles = StyleSheet.create({
    dropdownView: {
        borderWidth: 1,
        borderColor: colors.secondary_color,
        borderStyle: "solid",
        margin: 5,
        borderRadius: 5,
    },
    dropdownField: {
        fontSize: 18,
        fontFamily: appFontFamily,
    }
})

export const multiSelectStyles = StyleSheet.create({
    multiSelectTitleContainer: {
        margin: 5,
        borderWidth: 1,
        borderColor: colors.secondary_color,
        padding: 20,
        borderRadius: 5,
    },
    multiSelectTitle: {
        fontSize: 16,
    },
    selectedOptions: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 20,
        backgroundColor: colors.primary_color
    },
    closeIcon: {
        marginLeft: "auto",
        paddingVertical: 20,
        paddingHorizontal: 5,
    },
    multiSelectView: {
        ...inputFieldBox,
    },
    dropdownValues: {
        height: 500,
        marginTop: 5,
        // shadowColor: 'black',
        // shadowOpacity: 1,
        // shadowOffset: { width: -2, height: 5},
        // shadowRadius: 5,
        // elevation: 3,
        backgroundColor: colors.primary_color,
        borderRadius: 5,
    },
    individualItem: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: colors.grey_color,
        marginHorizontal: 15,
    },
    selectedItemPadding: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    selectedItem: {
        display: "flex",
        flexDirection: "row",
        margin: 5,
        backgroundColor: colors.primary_complementary_medium,
        alignSelf: "flex-start",
        borderRadius: 5,
        maxWidth: 175,

    },
    selectedItemText: {
        fontSize: 18,
        fontFamily: appFontFamily,
        marginTop: "auto",
        marginBottom: "auto",
    },
    selectedItemCross: {
        backgroundColor: colors.primary_complementary_dark,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
})

export const buttons = StyleSheet.create({
    multiDDButtonContainer: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
    },
    dropdownButton: {
        padding: 12,
        borderWidth: 1,
        borderColor: colors.secondary_color,
        width: "50%",
        margin: 10,
        borderRadius: 3,
    },
    textStyle: {
        textAlign: "center",
        fontSize: 18,
        color: colors.secondary_color,
        fontFamily: appFontFamily,
    }
})