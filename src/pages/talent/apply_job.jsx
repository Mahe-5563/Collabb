import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Modal, Text, ToastAndroid, Pressable } from "react-native";

import {
  appFontFamily,
  appFontFamilyBold,
  setMargin,
  textSize,
} from "../../css/common";
import Navbar from "../../components/navbar";
import CTAButton from "../../components/cta_button";
import { ctaButtons, summaryCard } from "../../css/interactables";
import { jdKeys, budgKeys } from "../../json/common";
import { apiApplyForJobPost, apiApplyForJob } from "../../api/job_post";
import SummaryCard from "../../components/page_components/summary_card";
import ApplyJobShrtDescription from "../../components/page_components/apply_job_shrt_desc";
import { colors } from "../../css/colors";
import { getDate } from "../../js/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function ApplyJob(props) {
  const { navigation, route } = props;
  const [jobDetails, setJobDetails] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState();

  useEffect(() => {
    if (route?.params?.jobDetails) {
      getDetails(route.params.jobDetails);
    }
  }, []);

  useEffect(() => {
    if (
      route?.params?.type == "view_application" &&
      route?.params?.jobDetails?.applicants &&
      props.currentUser
    ) {
      setApplicationStatus(
        route?.params?.jobDetails?.applicants?.filter(
          (applicant) => applicant.userid == props.currentUser._id
        )[0]
      );
    }
  }, [props.currentUser, route?.params?.jobDetails]);

  const getDetails = (jobDetails) => {
    setJobDetails(jobDetails);
  };

  const handleJobApply = () => {
    apiApplyForJob(jobDetails._id, props.currentUser._id, (response) => {
      setShowSuccessModal(true);
      ToastAndroid.show("Job applied successfully!", 2000);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigation.navigate("talent_home_page");
      }, 3000);
    });
  };

  return (
    <>
      <Navbar {...props} title={"Job Description"} />
      {route?.params?.type == "view_application" && route?.params?.usertype == "talent" && (
        <View style={[ summaryCard.cardBox, { marginTop: 30, position: "relative" } ]}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                marginRight: 10,
                fontFamily: appFontFamilyBold,
                fontSize: textSize,
              }}
            >
              {"Application Status:"}
            </Text>
            <View
              style={{
                backgroundColor:
                  applicationStatus?.status == "Accept"
                    ? "rgba(46, 198, 52, 0.7)"
                    : applicationStatus?.status == "Reject"
                    ? "rgba(202, 33, 33, 0.7)"
                    : "rgba(237, 137, 62, 0.7)",
                paddingVertical: 3,
                paddingHorizontal: 7,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: colors.white, fontFamily: appFontFamily }}>
                {applicationStatus?.status}
              </Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 10, }}>
            <Text
              style={{
                marginRight: 10,
                fontFamily: appFontFamilyBold,
                fontSize: textSize,
              }}
            >
              {"Date of Application:"}
            </Text>
            <Text style={{ fontSize: textSize, }}>
              {getDate(applicationStatus?.dateOfAppl)}
            </Text>
          </View>
        </View>
      )}
      {route?.params?.type == "view_application" && route?.params?.usertype == "client" && (
        <Pressable style={[summaryCard.editJDBtn]}>
          <View style={[summaryCard.editJDView]}
          >
            <FontAwesomeIcon icon={faEdit} size={textSize} style={[setMargin(10).setMarginRight]}/>
            <Text style={[summaryCard.editJDTitle]}>
              Edit Job Description
            </Text>
          </View>
        </Pressable>
      )}
      <ScrollView
        style={[
          // setPadding(20).setPaddingVertical,
          setMargin(20).setMarginBottom,
        ]}
      >
        {jobDetails && (
          <>
            <SummaryCard
              summaryObj={jobDetails}
              summaryKeys={jdKeys}
              summaryTitle={"Job Description"}
            />
            <SummaryCard
              summaryObj={jobDetails}
              summaryKeys={budgKeys}
              summaryTitle={"Budget Range"}
            />
          </>
        )}
      </ScrollView>
      {route.params.type != "view_application" && (
        <View style={[ctaButtons.bottomCTAFixedContainer]}>
          <View
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <CTAButton
              dark
              isDisabled={submitting}
              title={submitting ? "Applying..." : "Apply for this Job"}
              onPress={() => {
                setShowModal(true);
              }}
            />
          </View>
        </View>
      )}
      <ApplyJobShrtDescription
        showModal={showModal}
        setShowModal={setShowModal}
        submitting={submitting}
        setSubmitting={setSubmitting}
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
        handleJobApply={handleJobApply}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state.userDetail,
  ...state.currentUser,
});

export default connect(mapStateToProps)(ApplyJob);
