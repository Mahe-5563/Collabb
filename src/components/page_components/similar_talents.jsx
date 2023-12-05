import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";

import { marginCenter, setMargin } from "../../css/common";
import { homepageElements } from "../../css/client";
import ToggleButtons from "../../components/toggle_button";
import { applicationCard } from "../../css/interactables";

function SimilarTalents(props) {
  const { 
    navigation, 
    similarTalents, 
  } = props;
  // const [following, setFollowing] = useState(false);

  return (
    <>
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
          <Pressable
            key={`similar_talent_${index}`}
            style={[
              homepageElements.followSuggCard,
              ...(index != similarTalents.length - 1
                ? [setMargin(20).setMarginRight]
                : []),
            ]}
            onPress={() => {
              props.navigation.navigate("talent_apply_profile_page", {
								application: { [talent.userDetail._id]: { ...talent, } },
								type: "view_application",
								page: "search_talents",
								clientId: props.currentUser._id
							});
            }}
          >
            <Image
              source={{uri: talent?.userDetail?.profileUri}}
              style={[marginCenter, setMargin(20).setMarginTop, applicationCard.applicationProfileImg]}
            />
            <Text style={homepageElements.suggCardTitle}>{talent?.userDetail?.firstName?.trim()} {talent?.userDetail?.lastName?.trim()}</Text>
            <Text style={homepageElements.suggCardRole}>{talent?.profileDetail?.subcategory}</Text>
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
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

export default SimilarTalents;
