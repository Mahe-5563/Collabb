import {
    ScrollView,
    SafeAreaView,
    View,
    ActivityIndicator,
    Pressable,
    Text,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { connect } from "react-redux";
  
  import Navbar from "../../components/navbar";
  import { setPadding } from "../../css/common";
  
  function TalentApplications(props) {
    const [userType, setUserType] = useState();
    // const [loader, setLoader] = useState(true);
  
    return (
      <>
        <SafeAreaView>
          <Navbar {...props} title={"Inbox"} />
        </SafeAreaView>
        <ScrollView style={[setPadding(20).setPadding]}>
          {/* {loader && (
            <ActivityIndicator size={"large"} color={colors.secondary_color} />
          )} */}
          {/* {!loader && <></>} */}
        </ScrollView>
      </>
    );
  }
  
  const mapStateToProps = (state) => ({
    ...state,
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      //   setCategoryAndSubcategory: (selection) => dispatch(setCategoryAndSubcategory(selection))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TalentApplications);
  