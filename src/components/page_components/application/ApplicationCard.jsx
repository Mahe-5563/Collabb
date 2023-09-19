import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEuroSign, faList, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { talentApplyStyles } from "../../../css/interactables";
import { setMargin } from "../../../css/common";

function ApplicationCard(props) {
  const { 
    createdAt,
    jd_jobtitle,
    job_subcategory,
    budget_paytype,
    budget_minamt,
    budget_maxamt,
    budget_amount,
    jd_description,
  } = props;
  console.info("Props: ", props);

  useEffect(() => {
    
  }, [])
  

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingRight: 10,
  };

  const getJobDate = (date) => {
    let fullDate;
    if (date) {
      fullDate = `${(new Date(date).getDate() < 10 && new Date(date).getDate() > 0 ? "0" : "") + new Date(date).getDate()}/${(new Date(date).getMonth() + 1 < 10 ? "0" : "") + (new Date(date).getMonth() + 1)}/${new Date(date).getFullYear()}`;
    }

    return fullDate;
  };

  return (
    <>
      <View
        style={[talentApplyStyles.cardContainer, setMargin(20).setMarginBottom]}
      >
        <Text style={talentApplyStyles.date}>
          {getJobDate(createdAt) || ""}
        </Text>
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
      </View>
    </>
  );
}

export default ApplicationCard;