import React from "react";
import { View, Text, Pressable, SafeAreaView, Image } from "react-native";

import { homepageNavStyle } from "../css/navbar";
import { colors } from "../css/colors";
import { setMargin } from "../css/common";
import userImg from "../../assets/images/user.png";

function NavbarHomepage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={[homepageNavStyle.container]}>
        <Pressable
          style={[
            homepageNavStyle.profileImgPressable
          ]}
          onPress={() => {
            console.info("Profile Pic pressed!");
          }}
        >
          <Image 
            source={userImg}
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
          <Text style={[homepageNavStyle.titleBig]}>Maheshwar Arulraj</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NavbarHomepage;
