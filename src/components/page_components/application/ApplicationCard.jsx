import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEuroSign, faList, faBriefcase, faClock, faThumbsUp, faBan, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import { talentApplyStyles } from "../../../css/interactables";
import { appFontFamily, setMargin } from "../../../css/common";
import { colors } from "../../../css/colors";
import { getDate } from "../../../js/common";

function ApplicationCard(props) {
  const [applStatus, setApplStatus] = useState();
  const { 
    createdAt,
    jd_jobtitle,
    job_subcategory,
    budget_paytype,
    budget_minamt,
    budget_maxamt,
    budget_amount,
    jd_description,
    currentUser,
    applicants,
    type,
  } = props;
  
  useEffect(() => {

    if(currentUser && applicants) {
      setApplStatus(applicants?.filter(applicant => applicant.userid == currentUser._id)[0]);
    }
  }, [currentUser, applicants])

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingRight: 10,
  };

  return (
    <>
      <View
        style={[talentApplyStyles.cardContainer, setMargin(20).setMarginBottom]}
      >
        <Text style={talentApplyStyles.title}>{jd_jobtitle}</Text>
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faBriefcase} size={22} />
          <Text style={talentApplyStyles.textItem}>
            {job_subcategory.label}
          </Text>
        </View>
        {budget_paytype?.toLowerCase() == "per hour" ? (
          <>
            <View style={sectionStyle}>
              <FontAwesomeIcon icon={faEuroSign} size={22} />
              <Text style={talentApplyStyles.textItem}>
                Min: {budget_minamt}/{budget_paytype}
              </Text>
            </View>
            <View style={sectionStyle}>
              <FontAwesomeIcon icon={faEuroSign} size={22} />
              <Text style={talentApplyStyles.textItem}>
                Max: {budget_maxamt}/{budget_paytype}
              </Text>
            </View>
          </>
        ) : (
          <View style={sectionStyle}>
            <FontAwesomeIcon icon={faEuroSign} size={22} />
            <Text style={talentApplyStyles.textItem}>
              {budget_amount}/{budget_paytype}
            </Text>
          </View>
        )}
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faList} size={22} />
          <Text style={talentApplyStyles.textItem} numberOfLines={2}>
            {jd_description}
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            paddingTop: 10,
            borderColor: colors.primary_color_dark
          }}
        >
          <Text style={talentApplyStyles.textItem} numberOfLines={2}>
            Applied On: {getDate(applStatus?.dateOfAppl) || ""}
          </Text>
          <View
            style={{
              display:"flex",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text style={talentApplyStyles.textItem} numberOfLines={2}>
              Status:
            </Text>
            <View
              style={{
                marginLeft: 10,
                backgroundColor: 
                  applStatus?.status == "Accept" ? 
                    "rgba(46, 198, 52, 0.7)" 
                    : applStatus?.status == "Reject" ?
                      "rgba(202, 33, 33, 0.7)" 
                      : "rgba(237, 137, 62, 0.7)",
                paddingVertical: 3,
                paddingHorizontal: 7,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: colors.white, fontFamily: appFontFamily }}> {applStatus?.status} </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default ApplicationCard;
