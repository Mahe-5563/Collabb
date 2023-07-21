import * as React from "react";
import { Pressable, View } from "react-native";

import { navStyles, secondaryNavStyle } from "../css/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../css/colors";

export default function SecondaryNavbar({ navigation, route }) {

  return (
    <View
        style={secondaryNavStyle.secNavLayout}
    >
        <Pressable
            style={secondaryNavStyle.backButton}
            onPress={() => {  
                navigation.goBack(route?.params?.back_key);
            }}
        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                color={colors.secondary_color}
                size={28}
            />
        </Pressable>
    </View>
  );
}
