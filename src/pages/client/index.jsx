import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { faChartColumn, faCircleUser, faHouse, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

import NavbarHomepage from "../../components/navbar_homepage";
import ImgButton from "../../components/img_button";
import btnImg from "../../../assets/images/btnImg.png";
import placeholderImg from "../../../assets/images/placeholderImg.png";
import { marginCenter, setMargin, setPadding } from "../../css/common";
import { homepageElements } from "../../css/client";
import ToggleButtons from "../../components/toggle_button";
import FixedBottomNav from "../../components/fixedbottom_nav";

function ClientIndex(props) {
  const { navigation } = props;
  const [currentPage, setCurrentPage] = useState(1);
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

  const menuItems = [
    {
      id: 1,
      title: "HOME",
      icon: faHouse,
    },
    {
      id: 2,
      title: "DASHBOARD",
      icon: faChartColumn,
    },
    {
      id: 3,
      title: "MESSAGE",
      icon: faMessage,
    },
    {
      id: 4,
      title: "ACCOUNT",
      icon: faCircleUser,
    }
  ];

  return (
    <>
      <SafeAreaView>
        <NavbarHomepage {...props} />
      </SafeAreaView>
      <ScrollView style={[setPadding(20).setPaddingVertical]}>
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
                <Text style={homepageElements.suggCardTitle}>
                  {talent.name}
                </Text>
                <Text style={homepageElements.suggCardRole}>
                  {talent.jobRole}
                </Text>
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
        </View>
      </ScrollView> 
      <FixedBottomNav
        currentPage={currentPage}
        menuItems={menuItems}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default ClientIndex;
