import React, { useState, useEffect } from "react";
import { ScrollView, View, Modal, Text } from "react-native";

import Navbar from "../../components/navbar";
import CTAButton from "../../components/cta_button";
import {
  ctaButtons, multiSelectStyles, popupModal,
} from "../../css/interactables";
import {
  setMargin,
} from "../../css/common";
import { jdKeys, budgKeys } from "../../json/common";
import SummaryCard from "../../components/page_components/summary_card";
import { Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../components/input_field";
import ApplyJobShrtDescription from "../../components/page_components/apply_job_shrt_desc";

function ApplyJob(props) {
  const { navigation } = props;
  const [jobDetails, setJobDetails] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const sampleData = {
    budget: {
      amount: "",
      maxAmt: "20",
      minAmt: "15",
      paymentType: "Per Hour",
      restraints: "",
    },
    jobdescription: {
      description: "Description",
      endDate: "2023-08-31T13:58:49.251Z",
      experience: "Beginner",
      jobTitle: "Hello world",
      skills: [
        { id: 1, label: "Option 1", value: "Option 1" },
        { id: 2, label: "Option 2", value: "Option 2" },
      ],
      startDate: "2023-07-21T13:58:42.603Z",
    },
  };

  useEffect(() => {
    getDetails(sampleData);
  }, []);

  const getDetails = (jobDetails) => {
    setJobDetails(jobDetails);
  };

  return (
    <>
      <Navbar {...props} title={"Job Description"} />
      <ScrollView
        style={[
          // setPadding(20).setPaddingVertical,
          setMargin(20).setMarginVertical,
        ]}
      >
        {jobDetails && 
          <>
            <SummaryCard 
              summaryObj={jobDetails.jobdescription}
              summaryKeys={jdKeys}
              summaryTitle={"Job Description"}
            />
            <SummaryCard 
              summaryObj={jobDetails.budget}
              summaryKeys={budgKeys}
              summaryTitle={"Budget Requirement"}
            />
          </>
        }
      </ScrollView>
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
              // console.info("Apply clicked!");
              // setShowModal(true);
              setShowSuccessModal(true);
            }}
          />
        </View>
      </View>
      <ApplyJobShrtDescription
        showModal={showModal}
        setShowModal={setShowModal}
        submitting={submitting}
        setSubmitting={setSubmitting}
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
      />
    </>
  );
}

export default ApplyJob;
