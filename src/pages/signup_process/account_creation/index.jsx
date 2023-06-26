import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Pressable, Alert } from "react-native";
import { connect } from "react-redux";

import ComponentClientAccount from "./comp_client";
import ComponentTalentAccount from "./comp_talent";
import SecondaryNavbar from "../../../components/navbar_sec";
import { setProfileDetails } from "../../../../redux/actions/user";
import { pageCommons, setMargin } from "../../../css/common";

function AccountCreation(props) {
  const [accountType, setAccountType] = useState("");

  useEffect(() => setAccountType(props?.route?.params?.type), [props?.route?.params?.type]);

  const proceedToSummary = (formValues) => {
    console.info("formValues: ", formValues);

    const formKeys = Object.keys(formValues);
    let missingFields = "";
    let nonMandatoryFields = [ "website" ]
    
    formKeys.map(key => {
      if(!nonMandatoryFields.includes(key)) {
        if(
          (key == "account_type" && 
            (formValues[key] == "Organisation" && 
              !formValues.organisation_name)
            )
          ) {
          missingFields += `* ORGANISATION NAME\n`;
        } else if ((!formValues[key]) && key != "organisation_name") {
          missingFields += `* ${key.split("_").join(" ").toLocaleUpperCase()}\n`;
        }
      }
    })

    if(missingFields) {
      Alert.alert("Oops!", "The following mandatory fields are missing:\n\n"+ missingFields);
    } else {
      console.info("YAYY!!!");
      props.setProfileDetails(formValues);
    }
  }

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
    >
        <SecondaryNavbar {...props} />
        <View
          style={[
            setMargin("10%").setMarginTop
          ]}
        >
            <Text
              style={[
                pageCommons.pageTitle,
                setMargin("10%").setMarginBottom
              ]}
            >
              Account Details
            </Text>
            {accountType == "talent" ? 
              <ComponentTalentAccount 
                proceedToSummary={proceedToSummary} 
              /> : 
              <ComponentClientAccount
                proceedToSummary={proceedToSummary} 
              />
            }
        </View>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => {
  return {
    setProfileDetails: (profileObj) => dispatch(setProfileDetails(profileObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreation);
