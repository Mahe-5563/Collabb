import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

import { marginCenter, setMargin } from "../../css/common";
import { homepageElements } from "../../css/client";
import ToggleButtons from "../../components/toggle_button";

function SimilarTalents(props) {
  const { 
    navigation, 
    similarTalents, 
  } = props;
  const [following, setFollowing] = useState(false);

  return (
    <>
      <Text style={homepageElements.suggTitle}>
        {"Similar to your Searches"}
      </Text>
      <ScrollView
        horizontal={true}
        style={[
          setMargin(20).setMarginTop,
          {
            display: "flex",
            flexDirection: "row",
          },
        ]}
      >
        {similarTalents.map((talent, index) => (
          <View
            key={`similar_talent_${talent.id}`}
            style={[
              homepageElements.followSuggCard,
              ...(index != similarTalents.length - 1
                ? [setMargin(20).setMarginRight]
                : []),
            ]}
          >
            <Pressable
              style={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
              onPress={() => {
                console.info("tried to favourite!");
                setFollowing(!following);
              }}
            >
              <FontAwesomeIcon
                icon={following ? faStarSolid : faStarRegular}
                size={28}
                color="#d20000"
              />
            </Pressable>
            <Image
              source={talent.profilePic}
              style={[marginCenter, setMargin(20).setMarginTop]}
            />
            <Text style={homepageElements.suggCardTitle}>{talent.name}</Text>
            <Text style={homepageElements.suggCardRole}>{talent.jobRole}</Text>
            <View
              style={[
                setMargin(20).setMarginTop,
                {
                  display: "flex",
                  marginTop: "auto",
                },
              ]}
            >
              <ToggleButtons />
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default SimilarTalents;
