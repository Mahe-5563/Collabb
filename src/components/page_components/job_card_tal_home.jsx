import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
  faBriefcase,
  faEuroSign,
  faList,
  faFilter,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { talentApplyStyles } from "../../css/interactables";
import { appFontFamily, setPadding, textSize } from "../../css/common";
import { getDate } from "../../js/common";
import { colors } from "../../css/colors";

function TalJobCard(props) {
  const {
    budget_maxamt,
    budget_minamt,
    budget_paytype,
    // jd_startdate,
    jd_duration,
    jd_jobtitle,
    jd_description,
    budget_amount,
    job_subcategory,
    createdAt,
    applicants,
    currentUserId
  } = props;

  const [isApplied, setIsApplied] = useState(false);
  const [applicationAccepted, setApplicationAccepted] = useState(false);
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingRight: 10,
  };

  useEffect(() => {
    if(applicants.length > 0) {
      const applAccepted = applicants.filter(applicant => applicant.status == "Accept").length > 0
      // If the application is accepted, then remove it from the list. This needs to be handled on the server side.
      if(applAccepted) {
        setApplicationAccepted(true);
      } else {
        setIsApplied(applicants.filter(applicant => applicant.userid == currentUserId).length > 0);
      }
    }
  }, [applicants])

  return (
    <>
      {!applicationAccepted &&
        <View style={[talentApplyStyles.cardContainer, setPadding(30).setPaddingTop]}>
          {isApplied && 
            <Text style={talentApplyStyles.talentApplied}>
              {"Applied!"}
            </Text>
          }
          <Text style={[talentApplyStyles.date]}>{getDate(createdAt) || ""}</Text>
          <Text style={talentApplyStyles.title}>{jd_jobtitle}</Text>
          <View style={sectionStyle}>
            <FontAwesomeIcon icon={faBriefcase} size={22} />
            <Text style={talentApplyStyles.textItem}>{job_subcategory.label}</Text>
          </View>
          <View style={sectionStyle}>
            <FontAwesomeIcon icon={faClock} size={22} />
            <Text style={talentApplyStyles.textItem}>{jd_duration}</Text>
          </View>
          {budget_paytype.toLowerCase() == 'per hour' ?
            <>
              {/* <View style={sectionStyle}>
                <FontAwesomeIcon icon={faEuroSign} size={22} />
                <Text style={talentApplyStyles.textItem}>Min: {budget_minamt}/{budget_paytype}</Text>
              </View>
              <View style={sectionStyle}>
                <FontAwesomeIcon icon={faEuroSign} size={22} />
                <Text style={talentApplyStyles.textItem}>Max: {budget_maxamt}/{budget_paytype}</Text>
              </View> */}
              <View style={sectionStyle}>
                <FontAwesomeIcon icon={faEuroSign} size={22} />
                <Text style={talentApplyStyles.textItem}>{budget_minamt}-{budget_maxamt}/{budget_paytype}</Text>
              </View>
            </>
            : 
            <View style={sectionStyle}>
              <FontAwesomeIcon icon={faEuroSign} size={22} />
              <Text style={talentApplyStyles.textItem}>{budget_amount}/{budget_paytype}</Text>
            </View>
          }
          <View style={sectionStyle}>
            <FontAwesomeIcon icon={faList} size={22} />
            <Text 
              style={talentApplyStyles.textItem}
              numberOfLines={3}
            >
              {jd_description}
            </Text>
          </View>
        </View>
      }
    </>
  );
}

export default TalJobCard;
