import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Text, Pressable } from "react-native";
import { bindActionCreators } from "redux";
import SecondaryNavbar from "../../components/navbar_sec";

function AccountCreation(props) {
  

  return (
    <ScrollView
      style={{
        marginHorizontal: 15,
      }}
      automaticallyAdjustKeyboardInsets={true}
    >
        <SecondaryNavbar {...props} />

        <View>
            <Text> Account Details </Text>
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
