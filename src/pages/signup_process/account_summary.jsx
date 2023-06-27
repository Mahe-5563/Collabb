// Built-in
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Pressable, ScrollView, View, Text, Image } from "react-native";

// User components
import SecondaryNavbar from "../../components/navbar_sec";
import {
  appFontFamily,
  appFontFamilyBold,
  setMargin,
  setPadding,
  textHeaders,
  textSize,
  textSubheaders,
} from "../../css/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { multiSelectStyles, summaryCard } from "../../css/interactables";
import { colors } from "../../css/colors";
import CTAButton from "../../components/cta_button";

function AccountSummary(props) {
  const { route, navigation } = props;

  const [summaryOrder, setSummaryOrder] = useState([]);
  const [summaryKeys, setSummaryKeys] = useState([]);
  const [summaryDetails, setSummaryDetails] = useState({});

  const talentOrder = [
    { key: "category", title: "Category" },
    { key: "sub_category", title: "Sub Category" },
    { key: "skills", title: "Skills" },
    { key: "experience", title: "Experience" },
    { key: "location", title: "Location" },
    { key: "description", title: "About" },
    { key: "rate", title: "Rate" },
    { key: "pay_type", title: "Pay Type" },
  ];
  const clientOrder = [
    { key: "account_type", title: "Account Type" },
    { key: "organisation_name", title: "Organisation Name" },
    { key: "location", title: "Location" },
    { key: "description", title: "About" },
    { key: "website", title: "Website" },
  ];

  useEffect(() => {
    setSummaryDetails(props.userDetail.profileDetails);
    setSummaryKeys(Object.keys(props.userDetail.profileDetails));
    setSummaryOrder(
      route?.params?.accountType == "talent"
        ? talentOrder
        : route?.params?.accountType == "client"
        ? clientOrder
        : ""
    );
  }, []);

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <SecondaryNavbar {...props} />

      <View style={[setMargin("10%").setMarginVertical]}>
        <Text
          style={{
            fontSize: textHeaders,
            textAlign: "center",
            fontFamily: appFontFamily,
          }}
        >
          Confirm your Account Details
        </Text>
      </View>

      <Image 
        source={{ uri: summaryDetails?.profile_photo?.uri }}
        style={{
          height: 150,
          width: 150,
          borderRadius: 100,
          borderWidth: 1,
          marginLeft: "auto",
          marginRight: "auto",
          borderColor: colors.secondary_color_medium,
        }}
      />

      <View
        style={[
          setMargin("10%").setMarginTop,
          setPadding(20).setPaddingHorizontal,
          {
            display: "flex",
            flexDirection: "row",
          },
        ]}
      >
        <Text
          style={{
            fontSize: textSubheaders,
            fontFamily: appFontFamilyBold,
          }}
        >
          Profile Details
        </Text>
        <Pressable
          style={[
            setMargin("auto").setMarginLeft,
            setMargin("auto").setMarginTop,
            setMargin("auto").setMarginBottom,
          ]}
          onPress={() => {
            navigation.goBack(route?.params?.back_key);
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} size={22} />
        </Pressable>
      </View>

      <View style={summaryCard.cardBox}>
        {summaryKeys &&
          summaryDetails &&
          summaryOrder &&
          summaryOrder.map((summaryItem, index) => {
            const key = summaryItem.key;
            const title = summaryItem.title;
            const data = summaryDetails[key];
            return (
              <>
                {data && (
                  <View key={key} style={[setMargin(20).setMarginBottom]}>
                    {key == "skills" ? (
                      <>
                        <Text
                          style={[
                            summaryCard.textTitle,
                            setMargin(5).setMarginBottom,
                          ]}
                        >
                          {title}
                        </Text>
                        <View style={multiSelectStyles.selectedOptions}>
                          {data.map((datum) => (
                            <Text key={datum.id} style={summaryCard.chip}>
                              {datum.label}
                            </Text>
                          ))}
                        </View>
                      </>
                    ) : key == "location" ? (
                      <>
                        <Text
                          style={[
                            summaryCard.textTitle,
                            setMargin(5).setMarginBottom,
                          ]}
                        >
                          {title}
                        </Text>
                        <Text style={summaryCard.textContent}>{data.name}</Text>
                      </>
                    ) : (
                      <>
                        <Text
                          style={[
                            summaryCard.textTitle,
                            setMargin(5).setMarginBottom,
                          ]}
                        >
                          {title}
                        </Text>
                        <Text style={summaryCard.textContent}>{data}</Text>
                      </>
                    )}
                  </View>
                )}
              </>
            );
          })}
      </View>

      <CTAButton 
        dark
        halfWidth
        title={"Confirm"}
        customCSS={[
          setMargin(40).setMarginVertical,
          setMargin("auto").setMarginLeft,
          setMargin("auto").setMarginRight,
        ]}
        onPress={() => {
          console.info("Confirm")
        }}
      />
    </ScrollView>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileDetails: (profileObj) => dispatch(setProfileDetails(profileObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary);
