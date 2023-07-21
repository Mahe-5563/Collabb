import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  Modal,
  TouchableHighlight,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import SecondaryNavbar from "../../components/navbar_sec";
import PojBreadcrumb from "../../components/poj_breadcrumb";

function PojJobDescription(props) {
  return (
    <>
      <SafeAreaView>
        <SecondaryNavbar {...props} />
        <ScrollView>
          <View style={{ marginHorizontal: 10, marginVertical: 20, }}>
            <PojBreadcrumb
              activeStep={3}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PojJobDescription);
