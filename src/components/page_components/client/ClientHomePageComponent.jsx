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

import NavbarHomepage from "../../navbar_homepage";
import ImgButton from "../../img_button";
import btnImg from "../../../../assets/images/btnImg.png";
import placeholderImg from "../../../../assets/images/placeholderImg.png";
import { marginCenter, setMargin, setPadding } from "../../../css/common";
import SimilarTalents from "../similar_talents";

function ClientHomePageComp(props) {
  const { navigation } = props;
  const [following, setFollowing] = useState(false);

  const imgButtons = [
    {
      title: "Post a Job",
      btnBg: btnImg,
      onPress: () => {
        navigation.navigate(
          "client_choose_cat_subcat",
          { back_key: props.route.key }
        )
      },
    },
    {
      title: "Search Talents",
      btnBg: btnImg,
      onPress: function () {},
    },
    {
      title: "Small scale Business",
      btnBg: btnImg,
      onPress: function () {},
    },
  ];

  const similarTalents = [
    {
      id: "1",
      name: "Lionel Messi",
      profilePic: placeholderImg,
      jobRole: "Management Consultant",
    },
    {
      id: "2",
      name: "Erling Haaland",
      profilePic: placeholderImg,
      jobRole: "Art Dealer",
    },
    {
      id: "3",
      name: "Eden Hazard",
      profilePic: placeholderImg,
      jobRole: "Web Developer",
    },
  ];

  return (
    <>
      <SafeAreaView>
        <NavbarHomepage {...props} />
      </SafeAreaView>
      <ScrollView style={[setPadding(20).setPadding]}>
        <View>
          {imgButtons.map((btn) => (
            <ImgButton
              key={`imgbutton_${btn.title}`}
              bgImg={btn.btnBg}
              title={btn.title}
              onPress={btn.onPress}
              customCSS={[setMargin(25).setMarginBottom]}
            />
          ))}
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
            paddingBottom: 40,
          }}
        >
          <SimilarTalents 
            {...props}
            similarTalents={similarTalents}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default ClientHomePageComp;
