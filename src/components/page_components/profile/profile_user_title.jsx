import React, { useEffect, useRef, useState } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, SafeAreaView, View, Text } from "react-native";

import { colors } from "../../../css/colors";
import userImg from "../../../../assets/images/user.png";
import { profileSectionStyles } from "../../../css/interactables";
import { appFontFamily, textHeaders, textLabel, textSize, textSubheaders } from "../../../css/common";

function ProfileUserTitle(props) {
  const { userProfile, currentUser, userType } = props;
  // console.info("ProfileUserTitle (props): ", props);
  return (
    <SafeAreaView>
      <View
        style={{
          position: "relative",
          marginHorizontal: 20,
        }}
      >
        <Image
          source={{ uri: currentUser?.profileUri }} // Need to find a fix for the ImagePicker uri and base64
          style={profileSectionStyles.userIcon}
        />
        <View
          style={{
            marginLeft: "auto",
            alignItems: "center",
            top: 10,
          }}
        >
          <Image 
            source={{
              uri: `https://flagcdn.com/80x60/${userProfile?.locationcode?.toLowerCase()}.png`,
            }}
            alt={userProfile?.location}
            resizeMethod="scale"
            style={{
              width: 35,
              height: 25,
            }}
          />
          <Text
            style={{
              fontSize: textSize,
              fontFamily: appFontFamily,
              top: 5,
            }}
          >
            {userProfile?.location}
          </Text>
        </View>
        <Text style={profileSectionStyles.userName}>
          {currentUser?.firstName} {currentUser?.lastName}
        </Text>
        {userType == "talent" && 
          <Text style={profileSectionStyles.userProfession}>
            {userProfile?.subcategory}
          </Text>
        }
        {currentUser.usertype == "talent" && 
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <FontAwesomeIcon 
              icon={faCircle} 
              color={colors.success_color} 
              size={textSize}
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: textSize,
                fontFamily: appFontFamily,
              }}
            >
              Open To Work
            </Text>
          </View>
        }
      </View>
    </SafeAreaView>
  );
}

export default ProfileUserTitle;
