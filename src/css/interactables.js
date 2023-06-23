import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appFontFamily, appFontFamilyBold, textLabel, textSize } from "./common";

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
    fontSize: textSize,
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
        fontSize: textSize,
        fontFamily: appFontFamily,
        width: "95%" // Check if there is any width issue while typing the input.
    },
    multilineInputView: {
        ...inputFieldBox,
        maxHeight: 170,
        fontFamily: appFontFamily,
        fontSize: textSize,
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
        marginVertical: 5,
        borderRadius: 5,
        fontSize: textSize,
        fontFamily: appFontFamily,
    },
    dropdownField: {
        fontSize: textSize,
        fontFamily: appFontFamily,
    },
    customDropdown: {
        borderWidth: 1,
        borderColor: colors.secondary_color,
        paddingVertical: 18,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    customDropdownTitlePlaceholder: {
        color: colors.grey_color,
        fontSize: textSize,
        height: 27,
        textAlignVertical: "center",
        fontFamily: appFontFamily,
    },
    customDropdownTitle: {
        color: colors.secondary_color,
        fontSize: textSize,
        height: 27,
        textAlignVertical: "center",
        fontFamily: appFontFamily,
    },
    customDropdownList: {
        textAlign: "left",
        marginVertical: 10,
        maxHeight: 300,
        minHeight: 100,
        fontFamily: appFontFamily,
    },
    listItem: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey_color,
        paddingVertical: 15,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        fontFamily: appFontFamily,
    }
})

export const multiSelectStyles = StyleSheet.create({
    multiSelectTitleContainer: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.secondary_color,
        padding: 20,
        borderRadius: 5,
    },
    multiSelectTitle: {
        fontSize: textSize,
        color: colors.grey_color,
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
        position: "absolute",
        right: 0,
        top: -30,
    },
    multiSelectView: {
        ...inputFieldBox,
    },
    dropdownValues: {
        maxHeight: 340,
        minHeight: 200,
        marginTop: 5,
        backgroundColor: colors.primary_color,
        borderRadius: 5,
    },
    individualItem: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 10,
        fontSize: textSize,
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
        fontSize: textSize,
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
        paddingTop: 10,
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
        fontSize: textSize,
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
        marginRight: "auto",
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
        fontFamily: appFontFamilyBold,
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
        color: colors.danger_color,
        fontFamily: appFontFamily,
    },
    tipMessage: {
        fontFamily: appFontFamily,
        color: colors.blue_medium,
        fontSize: textLabel,
    }
})

export const popupModal = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalBody: {
        margin: 20,
        borderRadius: 5,
        padding: 20,
        // alignItems: 'center',
        backgroundColor: colors.primary_color,
        width: 350,
      },
})