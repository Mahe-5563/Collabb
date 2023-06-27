import React from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong, faBell } from "@fortawesome/free-solid-svg-icons";

import { navStyles } from "../css/navbar";
import { colors } from "../css/colors";

function Navbar({ navigation }) {
  return (
    <SafeAreaView style={navStyles.navbar}>
      <View style={navStyles.leftSection}>
        <Pressable
            onPress={() => {
              navigation.navigate("NewPage", {
                param1: "he",
                param2: "th",
              });
            }}
        >
            <FontAwesomeIcon
            icon={faLeftLong}
            style={navStyles.back}
            color={colors.primary_color}
            size={28}
            />
        </Pressable>
        <Text 
            numberOfLines={1}
            style={navStyles.text}
        >
            Welcome, Maheshwar Arulraj
        </Text>
      </View>
      <View>
        <Pressable
            onPress={() => {}}
        >
            <FontAwesomeIcon
            icon={faBell}
            style={navStyles.notification}
            color={colors.primary_color}
            size={22}
            />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Navbar;
