import * as React from "react";
import { Pressable, View } from "react-native";

import { secondaryNavStyle } from "../css/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function SecondaryNavbar({ navigation, route }) {

  return (
    <View
        style={secondaryNavStyle.secNavLayout}
    >
        <Pressable
            style={secondaryNavStyle.backButton}
            onPress={() => { 
                // console.info("Back button") 
                navigation.goBack(route?.params?.back_key);
            }}
        >
            <FontAwesomeIcon
                icon={faLeftLong}
                color="#000"
                size={24}
            />
        </Pressable>
    </View>
  );
}
