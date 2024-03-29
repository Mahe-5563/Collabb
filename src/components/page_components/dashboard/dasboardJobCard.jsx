import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Pressable,
  Text,
  ScrollView,
  ToastAndroid,
} from "react-native";
import {
  faBriefcase,
  faEuroSign,
  faList,
  faTimes,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { appFontFamilyBold, setMargin } from "../../../css/common";
import { talentApplyStyles } from "../../../css/interactables";
import CTAButton from "../../cta_button";
import { getDate } from "../../../js/common";
import { colors } from "../../../css/colors";
import { apiGetUserProfile } from "../../../api/users";

function DashboardJobCard(props) {
  const {
    jobDetail,
    userDetail,
    setOpenModal,
    navigation,
    userType,
    modalType,
    pageType,
  } = props;

  const [isAccepted, setIsAccepted] = useState(false);
  const [acceptedTalent, setAcceptedTalent] = useState();
  const [talentprofile, setTalentprofile] = useState();

  useEffect(() => {
    if (jobDetail?.applicants?.length > 0) {
      setIsAccepted(
        jobDetail?.applicants?.filter(
          (applicant) => applicant.status == "Accept"
        ).length > 0
      );
    }
  }, [jobDetail.applicants]);

  useEffect(() => {
    if (pageType != "justnow") {
      setAcceptedTalent(
        jobDetail?.applicants?.filter(
          (applicant) => applicant.status == "Accept"
        ).length > 0
      );
      const acceptedTalent = jobDetail?.applicants?.filter(
        (applicant) => applicant.status == "Accept"
      )[0];
      apiGetUserProfile(acceptedTalent.userid, "talent", (response) => {
        setTalentprofile(response.res);
      });
    }
  }, [pageType]);

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingRight: 10,
  };

  return (
    <View
      style={[talentApplyStyles.cardContainer, setMargin(20).setMarginBottom]}
    >
      {!isAccepted &&
        userType == "client" &&
        modalType == "application" &&
        jobDetail?.applicants?.length > 0 && (
          <Pressable
            style={talentApplyStyles.applicantBox}
            onPress={() => {
              // setOpenApplicationModal(false);
              navigation.navigate("talent_applications", {
                jobDetails: jobDetail,
              });
            }}
          >
            <FontAwesomeIcon
              icon={faUsers}
              size={22}
              style={[setMargin(10).setMarginRight]}
              color={colors.white}
            />
            <Text style={[talentApplyStyles.applicantCount]}>
              {jobDetail?.applicants?.length}{" "}
            </Text>
          </Pressable>
        )}
      {/* {isAccepted && 
        <View 
          style={[talentApplyStyles.applicantBox, { backgroundColor: colors.success_color, borderColor: colors.success_color }]}
          onPress={() => {
            // setOpenApplicationModal(false);
            navigation.navigate("talent_applications", {
              jobDetails: jobDetail,
            });
          }}
        >
          <Text style={[talentApplyStyles.applicantCount]}>Accepted! </Text>
        </View>
      } */}
      <Text style={talentApplyStyles.date}>
        {getDate(jobDetail.createdAt) || ""}
      </Text>
      <Text style={talentApplyStyles.title}>{jobDetail.jd_jobtitle}</Text>
      <View style={sectionStyle}>
        <FontAwesomeIcon icon={faBriefcase} size={22} />
        <Text style={talentApplyStyles.textItem}>
          {jobDetail.job_subcategory.label}
        </Text>
      </View>
      {/* This will be available once the client views the talent profile */}
      {userDetail && (
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faUser} size={22} />
          <Text style={talentApplyStyles.textItem}>
            {userDetail.firstName} {userDetail.lastName}
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
        {userType == "talent" && (
          <View
            style={{
              width: "50%",
            }}
          >
            <CTAButton
              title={"Contact"}
              onPress={() => {
                ToastAndroid.show("Contact", 1000);
              }}
            />
          </View>
        )}
        {modalType != "application" && (
          <View
            style={{
              width: userType == "talent" ? "50%" : "100%",
            }}
          >
            <CTAButton
              title={userType == "talent" ? "Job Desc." : "Job Description"}
              onPress={() => {
                setOpenModal(false);
                navigation.navigate("talent_apply_job_page", {
                  jobDetails: jobDetail,
                  type: "view_application",
                  usertype: "client",
                });
              }}
            />
          </View>
        )}
        {userType == "client" && modalType == "application" && (
          <View
            style={{
              width: "100%",
              // display: "flex",
              // flexDirection: "row"
            }}
          >
            <View style={{ width: "100%" }}>
              <CTAButton
                title={
                  pageType == "working" || pageType == "completed"
                    ? "View Applicant Details"
                    : jobDetail?.applicants?.length == 0
                    ? "No Applicants"
                    : "View Applicants"
                }
                isDisabled={jobDetail?.applicants?.length == 0}
                onPress={() => {
                  // setOpenApplicationModal(false);
                  if (acceptedTalent) {
                    props.navigation.navigate("talent_apply_profile_page", {
                      application: {
                        [acceptedTalent.userid]: {
                          profileDetail: talentprofile.talentDetails,
                          userDetail: talentprofile.userDetailsRes,
                        },
                      },
                      jobDetails: props?.route?.params?.jobDetails,
                      type: "view_application",
                    });
                  } else {
                    navigation.navigate("talent_applications", {
                      jobDetails: jobDetail,
                    });
                  }
                }}
              />
            </View>
            <View style={{ width: "100%" }}>
              <CTAButton
                title={"Job Description"}
                onPress={() => {
                  // setOpenApplicationModal(false);
                  /* navigation.navigate("talent_applications", {
                    jobDetails: jobDetail,
                  }); */
                  navigation.navigate("talent_apply_job_page", {
                    jobDetails: jobDetail,
                    type: "view_application",
                    usertype: "client",
                    jobstatus_accepted: isAccepted,
                  });
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default DashboardJobCard;

{
  /* {jobDetail.budget_paytype?.toLowerCase() == "per hour" ? (
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
      )} */
}
