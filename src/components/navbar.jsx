import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLeftLong,
  faBell,
  faChevronLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import { navStyles } from "../css/navbar";
import { colors } from "../css/colors";

function Navbar(props) {
  const { navigation, title, goToHome, homePage } = props;
  return (
    <SafeAreaView style={navStyles.navbar}>
      <View style={navStyles.leftSection}>
        <Pressable
          onPress={() => {
            navigation.goBack(props?.route?.params?.back_key);
          }}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={navStyles.back}
            color={colors.primary_color}
            size={28}
          />
        </Pressable>
        <Text numberOfLines={1} style={navStyles.text}>
          {title}
        </Text>
      </View>
      {goToHome && homePage && (
        <Pressable
          onPress={() => {
            // navigation;
          }}
          style={{
            marginTop: "auto",
            marginBottom: "auto"
          }}
        >
          <FontAwesomeIcon
            icon={faHome}
            color={colors.primary_color}
            size={28}
          />
        </Pressable>
      )}
    </SafeAreaView>
  );
}

export default Navbar;
