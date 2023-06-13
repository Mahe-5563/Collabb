import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  Pressable,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";
import Svg from "react-native-svg";

import { imgButtons } from "../css/interactables";

function ImgButton(props) {
    const {
        title,
        onPress,
        bgImg
    } = props;

  return (
    <SafeAreaView>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={"white"}
        style={[imgButtons.imgOverlay]}
      >
        <ImageBackground
          source={bgImg}
          style={imgButtons.btnImg}
          imageStyle={{
            borderRadius: 5,
          }}
        >
          <View style={[imgButtons.btnTitleBG]}>
            <Text style={[imgButtons.btnTitle]} numberOfLines={1}>
              {title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

export default ImgButton;
