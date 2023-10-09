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
import { setPadding } from "../../css/common";
import { getDate } from "../../js/common";

function TalJobCard(props) {
  // console.info("Props: ", props);
  const {
    budget_maxamt,
    budget_minamt,
    budget_paytype,
    jd_startdate,
    jd_jobtitle,
    jd_description,
    budget_amount,
    job_subcategory,
    createdAt,
  } = props;
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingRight: 10,
  };

  const getJobDate = (date) => {
    let fullDate;
    if(date) {
      fullDate = `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
    }

    return fullDate;
  }

  return (
    <>
      <View style={[talentApplyStyles.cardContainer, setPadding(30).setPaddingTop]}>
        <Text style={[talentApplyStyles.date]}>{getDate(createdAt) || ""}</Text>
        <Text style={talentApplyStyles.title}>{jd_jobtitle}</Text>
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faBriefcase} size={22} />
          <Text style={talentApplyStyles.textItem}>{job_subcategory.label}</Text>
        </View>
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faClock} size={22} />
          <Text style={talentApplyStyles.textItem}>Pay by {budget_paytype}</Text>
        </View>
        {budget_paytype.toLowerCase() == 'per hour' ?
          <>
            <View style={sectionStyle}>
              <FontAwesomeIcon icon={faEuroSign} size={22} />
              <Text style={talentApplyStyles.textItem}>Min: {budget_minamt}/{budget_paytype}</Text>
            </View>
            <View style={sectionStyle}>
              <FontAwesomeIcon icon={faEuroSign} size={22} />
              <Text style={talentApplyStyles.textItem}>Max: {budget_maxamt}/{budget_paytype}</Text>
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
    </>
  );
}

export default TalJobCard;
