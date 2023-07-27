import {
  ScrollView,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setMargin } from "../../css/common";
import CTAButton from "../../components/cta_button";
import SecondaryNavbar from "../../components/navbar_sec";
import PojBreadcrumb from "../../components/poj_breadcrumb";
import { setPostJobDetails } from "../../../redux/actions/client";
import { multiSelectStyles, summaryCard } from "../../css/interactables";

// Job Description Keys...
const jdKeys = [
  { id: "1", key: "jobTitle", name: "Title of the Job" },
  { id: "2", key: "startDate", name: "Start Date" },
  { id: "3", key: "endDate", name: "End Date" },
  { id: "4", key: "experience", name: "Experience" },
  { id: "5", key: "skills", name: "Skills" },
  { id: "6", key: "description", name: "Description" },
];

// Budget Requirement keys...
const budgKeys = [
  { id: "1", key: "paymentType", name: "Payment Type" },
  { id: "2", key: "minAmt", name: "Min. Amt." },
  { id: "3", key: "maxAmt", name: "Max. Amt." },
  { id: "4", key: "amount", name: "Amount" },
  { id: "5", key: "restraints", name: "Restraints" },
];

function PojSummary(props) {
  const { clientDetails, params } = props;

  const getSelectedDate = (date) => {
    const fullDate = new Date(date);
    if (!isNaN(fullDate)) {
      const dat = fullDate.getDate();
      const month = fullDate.getMonth() + 1;
      const year = fullDate.getFullYear();
      return `${(fullDate.getDate() < 10 ? "0" : "") + dat}/${
        (fullDate.getMonth() + 1 < 10 ? "0" : "") + month
      }/${year}`;
    } else {
      return "";
    }
  };

  const submitDetails = () => {
    console.info(clientDetails.postJobDetails.budgetReq)
    console.info(clientDetails.postJobDetails.jobDescription)
    ToastAndroid.show("Job posted successfully!", 5000);
  }

  return (
    <>
      <SecondaryNavbar {...props} />
      <ScrollView>
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          <PojBreadcrumb activeStep={3} stepTitle={"Summary"} />
        </View>
        <View style={[setMargin(20).setMarginBottom]}>
          <Text
            style={[summaryCard.textTitle, setMargin(20).setMarginHorizontal]}
          >
            {"Job Description"}
          </Text>
          <View style={[summaryCard.cardBox]}>
            {jdKeys.map((jdItem) => {
              const data =
                clientDetails?.postJobDetails?.jobDescription[jdItem.key];
              return (
                <View id={jdItem.id} style={[setMargin(10).setMarginVertical]}>
                  <Text style={summaryCard.textTitle}>
                    {jdItem.name}:
                  </Text>
                  <>
                    {jdItem.key == "startDate" || jdItem.key == "endDate" ? (
                      <Text style={summaryCard.textContent}>
                        {getSelectedDate(data)}
                      </Text>
                    ) : jdItem.key == "skills" ? (
                      <View style={multiSelectStyles.selectedOptions}>
                        {data.map((datum) => (
                          <Text key={datum.id} style={summaryCard.chip}>
                            {datum.label}
                          </Text>
                        ))}
                      </View>
                    ) : (
                      <Text style={summaryCard.textContent}>{data}</Text>
                    )}
                  </>
                </View>
              );
            })}
          </View>
        </View>
        <View style={[setMargin(20).setMarginBottom]}>
          <Text
            style={[summaryCard.textTitle, setMargin(20).setMarginHorizontal]}
          >
            {"Budget Requirements"}
          </Text>
          <View style={[summaryCard.cardBox]}>
            {budgKeys.map(budgItem => {
              const data = clientDetails?.postJobDetails?.budgetReq[budgItem.key];
              return (
                <View 
                  id={budgItem.id}
                  style={[setMargin(10).setMarginVertical]}
                >
                  {data &&
                    <>
                      <Text style={summaryCard.textTitle}>
                        {budgItem.name}:
                      </Text>
                      <Text style={summaryCard.textContent}>
                        {data}
                      </Text>
                    </>
                  }
                </View>
              )
            })}
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <CTAButton
            dark
            halfWidth
            title={"Proceed"}
            onPress={submitDetails}
          />
        </View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPostJobDetails: (projectDetails) =>
      dispatch(setPostJobDetails(projectDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PojSummary);
