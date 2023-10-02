import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appFontFamily, appFontFamilyBold, appFontFamilyMedium, setPadding, textHeaderLarge, textHeaderMedium, textHeaders, textLabel, textSize, textSmall, textSubheaders } from "./common";

// Recursive Elements...
const inputFieldBox = {
    borderColor: colors.secondary_color,
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 15,
    // paddingRight: 18,
    // paddingLeft: 18,
    // paddingTop: 15,
    // paddingBottom: 15,
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
    width: "100%",
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: "flex-start",
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
        marginRight: 15,
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
    },
    infoTooltip: {
        position: "absolute",
        bottom: 30,
        backgroundColor: colors.primary_color_medium,
        width: 150,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.primary_color_dark,
    },
    datepickerInputField: {
        ...inputFieldBox,
    },
})

export const dropdownStyles = StyleSheet.create({
    dropdownView: {
        borderWidth: 1,
        borderColor: colors.secondary_color,
        borderStyle: "solid",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.secondary_color,
        paddingVertical: 18,
        paddingHorizontal: 15,
        fontSize: textSize,
        fontFamily: appFontFamily,
        display: "flex",
        flexDirection: "row",
    },
    dropdownField: {
        fontSize: textSize,
        fontFamily: appFontFamily,
        width: "95%"
    },
    dropdownTextField: {
        color: colors.secondary_color_medium
    },
    dropdownPlaceholderField: {
        color: colors.grey_color
    },
    dropdownItems: {
        fontSize: textSize,
        fontFamily: appFontFamily,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.light_color,
    },
    customDropdown: {
        borderWidth: 1,
        borderColor: colors.secondary_color,
        paddingVertical: 14,
        paddingHorizontal: 15,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
    },
    customDropdownText: {
        fontSize: textSize,
        height: 27,
        textAlignVertical: "center",
        fontFamily: appFontFamily,
        width: "95%",
    },
    customDropdownTitlePlaceholder: {
        color: colors.grey_color,
    },
    customDropdownTitle: {
        color: colors.secondary_color,
    },
    customDropdownList: {
        textAlign: "left",
        marginVertical: 10,
        maxHeight: 350,
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
        paddingHorizontal: 15,
        paddingVertical: 16,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
    },
    multiSelectTitle: {
        fontSize: textSize,
        color: colors.grey_color,
        width: "95%"
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
    },
    bottomCTAFixedContainer: {
        padding: 10,
        backgroundColor: colors.primary_color_medium,
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
    subcategoryTitle: { 
        fontSize: textSubheaders, 
        fontFamily: appFontFamilyBold,
    },
    subcategoryContainer: {
        marginVertical: 20,
        maxHeight: 300,
    },
    subcategoryPress: {
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary_color,
    },
    subcategoryList: {
        fontSize: textSize,
        paddingHorizontal: 10,
        fontFamily: appFontFamily,
        paddingVertical: 24,
    },
    subcategoryTip: {
        fontSize: textSmall,
        fontFamily: appFontFamilyMedium,
        color: colors.secondary_color_medium,
    }
})

export const summaryCard = StyleSheet.create({
    cardBox: {
        backgroundColor: colors.primary_color_medium,
        padding: 25,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
    },
    textTitle: {
        fontFamily: appFontFamilyBold,
        fontSize: textSubheaders,
    },
    textContent: {
        fontFamily: appFontFamily,
        fontSize: textSize,
    },
    chip: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.primary_complementary_medium,
        fontSize: textSize,
        borderRadius: 5,
        marginRight: 10,
    }
});

export const searchFieldStyle = StyleSheet.create({
    textFieldContainer: {
        borderWidth: 1,
        borderColor: "black",
        display: "flex",
        flexDirection: "row",
        // margin: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 40,
        // position: "relative",
    },
    searchIcon: {
        marginTop: "auto",
        marginBottom: "auto"
    },
    searchText: {
        fontFamily: appFontFamily,
        fontSize: textSize,
    },
    dropdownContainer: {
        ...boxShadow,
        position: "absolute",
        backgroundColor: colors.primary_color,
        top: 70,
        width: "100%",
        borderWidth: 1,
        borderColor: colors.grey_color,
        zIndex: 999,
        padding: 10,
        maxHeight: 200,
        borderRadius: 5,
    },
    dropdownText: {
        fontSize: textSize,
        fontFamily: appFontFamily,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary_color,
        paddingHorizontal: 10,
    },
    noResultsFound: {
        fontSize: textSize,
        fontFamily: appFontFamily,
        paddingVertical: 20,
        paddingHorizontal: 10,
    }
})

export const toastMessageStyle = StyleSheet.create({
    toastMessageContainer: {
        ...boxShadow,
        backgroundColor: colors.primary_color_dark,
        position: "absolute",
        bottom: 70,
        left: 0,
        right: 0,
        alignItems: "center",
        marginHorizontal: 40,
        padding: 17,
        borderWidth: 1,
        borderColor: colors.secondary_color,
        borderRadius: 50,
    },
    toastMessageText: {
        fontSize: textSize,
        fontFamily: appFontFamily,
    }
})

export const breadCrumbStyles = StyleSheet.create({
    poj_breadcrumb_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    poj_breadcrumb_sep: { 
        borderBottomWidth: 1, 
        borderBottomColor: "#000", 
        width: "25%", 
        marginBottom: "auto",
        marginTop: "auto"
    },
    poj_breadcrumb_img: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: colors.secondary_color,
        borderRadius: 50,
    },
    poj_breadcrumb_title: {
        textAlign: "center",
        marginVertical: 30,
        fontFamily: appFontFamilyBold,
        fontSize: textHeaderLarge,
    }
})

export const talentApplyStyles = StyleSheet.create({
    cardContainer: {
        shadowColor: colors.secondary_color ,
        elevation: 3,
        padding: 20,
        borderRadius: 5,
        // borderWidth: 1,
        // borderColor: colors.secondary_color,
        position: "relative",
        backgroundColor: colors.primary_color_medium
    },
    title: {
        fontSize: textSubheaders,
        fontFamily: appFontFamily,
        marginBottom: 20,
    },
    textItem: {
        marginTop: "auto",
        marginBottom: "auto",
        fontSize: textSize,
        fontFamily: appFontFamily,
        marginLeft: 10,
    },
    date: {
        position: "absolute",
        right: 7,
        top: 7,
    }
})

export const overlayDropdownStyles = StyleSheet.create({
    overlayContainer: {
        borderWidth: 1,
        borderColor: colors.secondary_color,
        padding: 15,
        backgroundColor: colors.primary_color,
        width: "100%",
        position: "absolute",
        top: 65,
        maxHeight: 170,
        zIndex: 999,
    },
    overlayListItem: {
        fontSize: 18,
        fontFamily: appFontFamily,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary_color
    }
})

export const dashboardStyles = StyleSheet.create({
    cardStyle: {
        borderWidth: 1,
        borderColor: colors.secondary_color,
        height: 250,
        width: "49%",
        backgroundColor: colors.primary_color_medium,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: 10,
    },
    dashboardTitle: {
        fontSize: textHeaderMedium,
        marginTop: 20,
        textAlign: "center",
    },
    jobCardStyle: {
        backgroundColor: colors.primary_color_medium,
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderRadius: 5,
        position: "relative",
    },
    iconPadding: setPadding(8).setPaddingVertical,
    flexAlignment: {
        display: "flex",
		flexDirection: "row",
		alignItems: "center",
    },
    cardContentText: {
        fontFamily: appFontFamily, 
        fontSize: textSize, 
        marginLeft: 10,
    }
})

export const profileSectionStyles = StyleSheet.create({
    headerBackIcon: {
        position: "absolute",
        zIndex: 999,
        left: 20,
        top: 30,
        backgroundColor: colors.primary_color_medium,
        borderRadius: 50,
    },
    userIcon: {
        width: 150,
        height: 150,
        position: "absolute",
        top: -70,
        borderWidth: 1,
        borderColor: colors.secondary_color,
        borderRadius: 90,
    },
    userName: {
        marginTop: 50,
        fontSize: textHeaders,
        fontFamily: appFontFamily,
    },
    userProfession: {
        marginTop: 10,
        fontSize: textSubheaders,
        fontFamily: appFontFamily,
    },
    followersSection: {
        borderWidth: 1,
        borderColor: colors.grey_color,
        borderRadius: 5,
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        padding: 10,
    },
    actionIconSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 10,
    },
    actionIcons: { 
        alignItems: "center" 
    },
    actionIconTitle: {
        fontSize: textSize,
        fontFamily: appFontFamily,
        marginTop: 7,
    },
    talentRateXPSectionBox: {
        borderWidth: 1,
        borderColor: colors.grey_color,
        // width: "85%",
        display: "flex",
        flexDirection: "row",
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5,
    },
    talentRateXPSection: {
        padding: 5,
        width: "50%"
    }
})

export const accordionStyles = StyleSheet.create({
    categoriesAccTitle: {
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: colors.grey_color,
        paddingHorizontal: 10,
        paddingVertical: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    categoriesAccItem: {
        fontSize: 20,
        fontFamily: appFontFamily,
    },
    subcateAccTitle: {
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: colors.primary_color_medium,
        borderRadius: 5,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subcateAccItem: {
        fontSize: 18,
        fontFamily: appFontFamily,
    }
})