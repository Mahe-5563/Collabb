import React from "react";
import { View, Text, Pressable, SafeAreaView, Image } from "react-native";

import { homepageNavStyle } from "../css/navbar";
import { colors } from "../css/colors";
import { setMargin } from "../css/common";
import userImg from "../../assets/images/user.png";

function NavbarHomepage(props) {
  const currentUserType = props?.currentUser?.usertype;
  // console.info("user: ", props.currentUser);
  return (
    <SafeAreaView>
      <View style={[homepageNavStyle.container]}>
        <Pressable
          style={[
            homepageNavStyle.profileImgPressable
          ]}
          onPress={() => {
            console.info("Profile Pic pressed!", currentUserType);
            if(currentUserType == "talent") {
              props.navigation.navigate(
                "talent_profile_page",
                { back_key: props.route.key }
              )
            } else if (currentUserType == "client") {
              props.navigation.navigate(
                "client_profile_page",
                { back_key: props.route.key }
              )
            }
          }}
        >
          <Image 
            source={props.currentUser.profileUri ? { uri: props?.currentUser?.profileUri } : userImg}
            style={homepageNavStyle.profileImg}
          />
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
