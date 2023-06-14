import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appFontFamily, appFontFamilyBold, appFontFamilyMedium, appFontFamilyThin } from "./common";

// Recursive Elements...
const inputFieldBox = {
    borderColor: colors.secondary_color,
    borderStyle: "solid",
    borderWidth: 1,
    paddingRight: 18,
    paddingLeft: 18,
    paddingTop: 15,
    paddingBottom: 15,
    // margin: 5,
    borderRadius: 5,
    fontSize: 18,
}

const boxShadow = {
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: -2, height: 5},
    shadowRadius: 5,
    elevation: 3,
}

const toggleButtonSize = {
    width: "40%",
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 5,
}

const toggleButtonText = {
    fontSize: 20,
    fontFamily: appFontFamily,
    textAlign: "center"
}


// Stylesheets...
export const inputStyles = StyleSheet.create({
    inputView: {
        ...inputFieldBox,
        display: "flex",
        flexDirection: "row",
    },
    interactableIcon: {
        marginTop: "auto",
        marginBottom: "auto",
        margin: 15,
    },
    inputField: {
        fontSize: 18,
        fontFamily: appFontFamily,
        width: "95%" // Check if there is any width issue while typing the input.
    },
    multilineInputView: {
        ...inputFieldBox,
        maxHeight: 170,
        fontFamily: appFontFamily,
    },
    visibilityIcon: {
        marginTop: "auto",
        marginBottom: "auto",
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
        // ...boxShadow,
        height: 500,
        marginTop: 5,
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
    },
    attachButtonComponent: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        alignSelf: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 5,
        margin: 5,
        borderRadius: 50,
    },
    attachButtonText: {
        fontSize: 22
    }
})

export const ctaButtons = StyleSheet.create({
    ctaButtonComponent: {
        ...boxShadow,
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderWidth: 1,
        margin: 5,
        // borderRadius: 5,
        display: "flex",
        flexDirection: "row",
    },
    ctaHalf: {
        width: "50%",
    },
    ctaButtonTitle: {
        fontFamily: appFontFamilyBold,
        fontSize: 24,
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
    },
    ctaPrimaryComponent: {
        backgroundColor: colors.primary_color,
        borderColor: colors.secondary_color,
    },
    ctaPrimaryTitle: {
        color: colors.primary_color,
    },
    ctaSecondaryComponent: {
        backgroundColor: colors.secondary_color,
        borderColor: colors.primary_color,
    },
    ctaSecondaryTitle: {
        color: colors.secondary_color,
    },
    ctaPrimaryComponentDisabled: {
        backgroundColor: colors.primary_color,
        borderColor: colors.grey_color,
    },
    ctaPrimaryTitleDisabled: {
        color: colors.grey_color,
    },
    ctaSecondaryComponentDisabled: {
        backgroundColor: colors.secondary_color_medium,
        borderColor: colors.primary_color,
    },
    ctaSecondaryTitleDisabled: {
        color: colors.grey_color,
    }
})

export const imgButtons = StyleSheet.create({
    imgOverlay: {
        ...boxShadow,
        height: 170,
        width: 370,
        margin: 5,
        marginLeft: "auto",
        margin: "auto",
        borderRadius: 5,
    },
    btnImg: {
        flex: 1,
    },
    btnTitleBG: {
        marginTop: "auto",
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        alignSelf: "flex-start",
        paddingVertical: 12,
        paddingHorizontal: 10,
        maxWidth: 280,
        borderRadius: 5,
    },
    btnTitle: {
        fontFamily: appFontFamily,
        color: "#fff",
        fontSize: 28,
        opacity: 1,
    }
})

export const toggleButtons = StyleSheet.create({
    btnFollow: {
        ...toggleButtonSize,
        backgroundColor: colors.secondary_color,
    },
    btnFollowTitle: {
        ...toggleButtonText,
        color: colors.primary_color,
    },
    btnFollowing: {
        ...toggleButtonSize,
        borderColor: colors.secondary_color,
        backgroundColor: colors.primary_color,
    },
    btnFollowingTitle: {
        ...toggleButtonText,
        color: colors.secondary_color,
    }
})

export const textStyles = StyleSheet.create({
    errorMessage: {
        color: colors.danger_color
    }
})