import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { faCircle, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, ScrollView, View, Dimensions, Text, SafeAreaView, Pressable } from "react-native";

import { profileSectionStyles } from "../../css/interactables";
import ProfileHeader from "../../components/page_components/profile/profile_header";
import ProfileUserTitle from "../../components/page_components/profile/profile_user_title";
import ProfileActionSection from "../../components/page_components/profile/profile_action_section";

function TalentProfile(props) {
  const { userProfile, currentUser } = props;
  const [userType, setUserType] = useState("");

  // console.info("userProfile: ", userProfile);
  // console.info("currentUser: ", currentUser);

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          props.navigation.goBack();
        }}
        style={profileSectionStyles.headerBackIcon}
      >
        <FontAwesomeIcon
          icon={faCircleLeft}
          size={55}
        />
      </Pressable>
      <ScrollView>
        <ProfileHeader />
        <ProfileUserTitle
          {...props}
        />
        <ProfileActionSection
          {...props}
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

export default connect(mapStateToProps, mapDispatchToProps)(TalentProfile);
