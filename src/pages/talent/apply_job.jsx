import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Modal, Text, ToastAndroid } from "react-native";

import { setMargin } from "../../css/common";
import Navbar from "../../components/navbar";
import CTAButton from "../../components/cta_button";
import { ctaButtons } from "../../css/interactables";
import { jdKeys, budgKeys } from "../../json/common";
import { apiApplyForJobPost } from "../../api/job_post";
import SummaryCard from "../../components/page_components/summary_card";
import ApplyJobShrtDescription from "../../components/page_components/apply_job_shrt_desc";

function ApplyJob(props) {
  const { navigation, route } = props;
  const [jobDetails, setJobDetails] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (route?.params?.jobDetails) {
      getDetails(route.params.jobDetails);
    }
  }, []);

  const getDetails = (jobDetails) => {
    setJobDetails(jobDetails);
  };

  const handleJobApply = () => {
    apiApplyForJobPost(
      jobDetails._id, 
      { key: "applicants", value: props.currentUser._id }, 
      (response) => {
        console.info("Response: ", response);
        setShowSuccessModal(true);
        ToastAndroid.show("Job applied successfully!", 2000);
        setTimeout(() => {
          setShowSuccessModal(false);
          navigation.navigate("talent_home_page")
        }, 5000);
      }
    )
  }

  return (
    <>
      <Navbar {...props} title={"Job Description"} />
      <ScrollView
        style={[
          // setPadding(20).setPaddingVertical,
          setMargin(20).setMarginVertical,
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
              summaryTitle={"Budget Requirement"}
            />
          </>
        )}
      </ScrollView>
      {route.params.type != "view_application" && <View style={[ctaButtons.bottomCTAFixedContainer]}>
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
              // console.info("Apply clicked!");
              setShowModal(true);
            }}
          />
        </View>
      </View>}
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
});

export default connect(mapStateToProps)(ApplyJob);
