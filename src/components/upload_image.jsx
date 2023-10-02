import React, { useEffect, useState } from "react";
import { View, Pressable, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { textSize } from "../css/common";
import { colors } from "../css/colors";

function UploadImage(props) {
  const { imgSrc, height, width, alt, uploadFunction, customCSS, label } =
    props;

  const onPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
    });

    uploadFunction(result);
  };

  return (
    <View
      style={{
        marginHorizontal: 15,
      }}
    >
      <Pressable onPress={onPress} style={[...(customCSS ? customCSS : [])]}>
        <Image
          source={imgSrc}
          alt={alt}
          style={[
            {
              height,
              width,
              marginBottom: 10,
              borderRadius: 100,
              borderWidth: 1,
              marginLeft: "auto",
              marginRight: "auto",
              borderColor: colors.secondary_color_medium,
            },
          ]}
        />
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: textSize,
          }}
        >
          {" "}
          {label}{" "}
        </Text>
      </Pressable>
    </View>
  );
}

export default UploadImage;
