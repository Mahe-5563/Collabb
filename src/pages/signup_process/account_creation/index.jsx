import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Text, Pressable } from "react-native";
import { bindActionCreators } from "redux";
import SecondaryNavbar from "../../../components/navbar_sec";
import { pageCommons, setMargin, setPadding } from "../../../css/common";
import ComponentClientAccount from "./comp_client";
import ComponentTalentAccount from "./comp_talent";

function AccountCreation(props) {

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
            <ComponentClientAccount />
        </View>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
//   userDetail: state.userDetail,
});

const ActionCreators = Object.assign(
  {},
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreation);
