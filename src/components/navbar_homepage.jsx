import React from "react";
import { View, Text, Pressable, SafeAreaView, Image, Alert } from "react-native";

import { homepageNavStyle } from "../css/navbar";
import { colors } from "../css/colors";
import { appFontFamily, fontFamily, setMargin } from "../css/common";
import userImg from "../../assets/images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function NavbarHomepage(props) {
  const currentUserType = props?.currentUser?.usertype;
  return (
    <SafeAreaView>
      <View style={[homepageNavStyle.container]}>
        <Pressable
          style={[
            homepageNavStyle.profileImgPressable
          ]}
          onPress={() => {
            Alert.alert(
              "Confirmation.",
              "Are you sure you want to log out?",
              [
                {
                  text: "Yes",
                  onPress: () => {
                    AsyncStorage.setItem("userId", "");
                    props.navigation.navigate("firstpage");
                  },
                  style: "default"
                },
                {
                  text: "No",
                  onPress: () => {},
                  style: "cancel"
                }
              ]
            )
          }}
        >
          <FontAwesomeIcon 
            icon={faArrowRightFromBracket}
            size={26}
            color={colors.primary_color}
            style={{
              marginBottom: 5,
              // marginRight: 10,
            }}
          />
          <Text
            style={{
              color: colors.primary_color,
              fontFamily: appFontFamily
            }}
          >
            Log Out
          </Text>
        </Pressable>
        <View
          style={{
            position: "absolute",
            bottom: 30,
            left: 20,
          }}
        >
          <Text style={[
              homepageNavStyle.titleSmall,
              setMargin(10).setMarginBottom,
            ]}
          >
              Hi There!
            </Text>
          <Text style={[homepageNavStyle.titleBig]}>{props?.currentUser?.firstName} {props?.currentUser?.lastName}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NavbarHomepage;
