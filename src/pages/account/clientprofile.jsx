import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { faChevronCircleLeft, faCircle, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, ScrollView, View, Dimensions, Text, SafeAreaView, Pressable } from "react-native";

import { profileSectionStyles } from "../../css/interactables";
import ProfileHeader from "../../components/page_components/profile/profile_header";
import ProfileUserTitle from "../../components/page_components/profile/profile_user_title";
import ProfileActionSection from "../../components/page_components/profile/profile_action_section";

function ClientProfile(props) {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          props.navigation.goBack();
        }}
        style={profileSectionStyles.headerBackIcon}
      >
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size={55}
        />
      </Pressable>
      <ScrollView>
        <ProfileHeader
          userType={"client"}
        />
        <ProfileUserTitle
          {...props}
          userType={"client"}
        />
        <ProfileActionSection
          {...props}
          userType={"client"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  ...state.userDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // setCurrentUserDetails: (currentUser) => dispatch(setCurrentUserProfile(currentUser)),
    // setCurrentUserProfileDetails: (currentUser) => dispatch(setCurrentUserProfileDetails(currentUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
