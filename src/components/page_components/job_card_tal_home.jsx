
import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faBriefcase, faEuroSign, faList, faFilter } from "@fortawesome/free-solid-svg-icons";
import { talentApplyStyles } from "../../css/interactables";
import { setPadding, textSubheaders } from "../../css/common";

function TalJobCard(props) {
  const sectionStyle = { display: "flex", flexDirection: "row", marginBottom: 15, paddingRight: 10, };

  return (
    <>
      <View style={[talentApplyStyles.cardContainer]}>
        <Text style={talentApplyStyles.date}>{"07/07/1997"}</Text>
        <Text style={talentApplyStyles.title}>{"Title of the Job"}</Text>
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faBriefcase} size={22} />
          <Text style={talentApplyStyles.textItem}>{"Web Design"}</Text>
        </View>
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faEuroSign} size={22} />
          <Text style={talentApplyStyles.textItem}>{"20/hr"}</Text>
        </View>
        <View style={sectionStyle}>
          <FontAwesomeIcon icon={faList} size={22} />
          <Text style={talentApplyStyles.textItem}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum iaculis magna quis vestibulum. In vitae libero dapibus massa pellentesque molestie eu nec lectus. "}</Text>
        </View>
      </View>
    </>
  );
}

export default TalJobCard;