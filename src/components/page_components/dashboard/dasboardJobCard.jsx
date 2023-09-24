import React, { useState, useEffect } from "react";
import { Modal, View, Pressable, Text, ScrollView, ToastAndroid } from "react-native";
import {
  faBriefcase,
  faEuroSign,
  faList,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
	setMargin,
} from "../../../css/common";
import {
  talentApplyStyles,
} from "../../../css/interactables";
import CTAButton from "../../cta_button";

function DashboardJobCard(props) {
  const { 
    jobDetail,
    userDetail,
    setOpenModal,
    navigation,
    userType,
    modalType,
    setOpenApplicationModal
	} = props;

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingRight: 10,
  };

  const getJobDate = (date) => {
    let fullDate;
    if (date) {
      fullDate = `${new Date(date).getDate()}/${
        new Date(date).getMonth() + 1
      }/${new Date(date).getFullYear()}`;
    }

    return fullDate;
  };

  return (
    <View style={[talentApplyStyles.cardContainer, setMargin(20).setMarginBottom]}>
      <Text style={talentApplyStyles.date}>{getJobDate(jobDetail.createdAt) || ""}</Text>
      <Text style={talentApplyStyles.title}>{jobDetail.jd_jobtitle}</Text>
      <View style={sectionStyle}>
        <FontAwesomeIcon icon={faBriefcase} size={22} />
        <Text style={talentApplyStyles.textItem}>
          {jobDetail.job_subcategory.label}
        </Text>
      </View>
      {/* This will be available once the client views the talent profile */}
			{userDetail && <View style={sectionStyle}>
        <FontAwesomeIcon icon={faUser} size={22} />
        <Text style={talentApplyStyles.textItem}>
          {userDetail.firstName} {userDetail.lastName}
        </Text>
      </View>}
      {jobDetail.budget_paytype?.toLowerCase() == "per hour" ? (
        <>
          <View style={sectionStyle}>
            <FontAwesomeIcon icon={faEuroSign} size={22} />
            <Text style={talentApplyStyles.textItem}>
              Min: {jobDetail.budget_minamt}/{jobDetail.budget_paytype}
            </Text>
          </View>
          <View style={sectionStyle}>
            <FontAwesomeIcon icon={faEuroSign} size={22} />
            <Text style={talentApplyStyles.textItem}>
              Max: {jobDetail.budget_maxamt}/{jobDetail.budget_paytype}
            </Text>
          </View>
        </>
      ) : (
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faEuroSign} size={22} />
          <Text style={talentApplyStyles.textItem}>
            {jobDetail.budget_amount}/{jobDetail.budget_paytype}
          </Text>
        </View>
      )}
      <View style={sectionStyle}>
        <FontAwesomeIcon icon={faList} size={22} />
        <Text style={talentApplyStyles.textItem} numberOfLines={2}>
          {jobDetail.jd_description}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {userType == "talent" && <View
          style={{
            width: "50%"
          }}
        >
          <CTAButton
            title={"Contact"}
            onPress={() => { ToastAndroid.show("Contact", 1000) }}
          />
        </View>}
        {modalType !="application" && 
          <View
            style={{
              width: userType == "talent" ? "50%" : "100%"
            }}
          >
            <CTAButton
              title={userType == "talent" ? "Job Desc." : "Job Description"}
              onPress={() => {
                setOpenModal(false);
                navigation.navigate("talent_apply_job_page", {
                  jobDetails: jobDetail,
                  type: "view_application"
                });
              }}
            />
          </View>
        }
        {userType == "client" && modalType =="application" && 
          <View
            style={{
              width: "100%"
            }}
          >
            <CTAButton
              title={"View Applicants"}
              onPress={() => {
                setOpenApplicationModal(false);
                navigation.navigate("talent_applications", {
                  jobDetails: jobDetail,
                });
              }}
            />
          </View>
        }
      </View>
    </View>
  );
}

export default DashboardJobCard;
