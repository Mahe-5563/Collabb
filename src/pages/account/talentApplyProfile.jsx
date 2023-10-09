import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { faChevronCircleLeft, faCircle, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Image,
  ScrollView,
  View,
  Dimensions,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";

import { profileSectionStyles } from "../../css/interactables";
import ProfileHeader from "../../components/page_components/profile/profile_header";
import ProfileUserTitle from "../../components/page_components/profile/profile_user_title";
import ProfileActionSection from "../../components/page_components/profile/profile_action_section";

function TalentApplyProfile(props) {
  const [applicationDetail, setApplicationDetail] = useState();
  const [jobDetails, setJobDetails] = useState();

  useEffect(() => {
    const application = props?.route?.params?.application;
    let userKey = Object.keys(application)[0];
    setApplicationDetail(application[userKey]);
    setJobDetails(props?.route?.params?.jobDetails);
  }, []);

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          props.navigation.goBack();
        }}
        style={profileSectionStyles.headerBackIcon}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} size={55} />
      </Pressable>
      <ScrollView>
        <ProfileHeader 
          userType={"client"}
        />
        <ProfileUserTitle
          userProfile={applicationDetail?.profileDetail}
          currentUser={applicationDetail?.userDetail}
          userType={"client"}
          status="talentApply"
        />
        <ProfileActionSection
          userProfile={applicationDetail?.profileDetail}
          currentUser={applicationDetail?.userDetail}
          jobDetails={jobDetails}
          userType={"client"}
          status="talentApply"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TalentApplyProfile;
