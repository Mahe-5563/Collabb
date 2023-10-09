import React, { useEffect, useState } from "react";
import {
  View,
} from "react-native";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CTAButton from "../components/cta_button";
import LogoDark from "../../assets/images/logo_dark.png";
import { apiGetUserDetailsById } from "../api/account_creation";

function FirstPage(props) {
  const [isValidCred, setIsValidCred] = useState(true); // Yet to implement...

  useEffect(() => {
    
    async function checkForUser () {
      const userId = await AsyncStorage.getItem("userId");
      console.info(userId);
      if(userId) {
        apiGetUserDetailsById(userId, (response) => {
          const userType = response?.res?.usertype;
          // console.info("Details: ", response.res);
          if(userType == "client"){
            props.navigation.navigate(
              "client_home_page",
              {
                userDetails: response?.res
              }
            );
          } else if (userType == "talent") {
            props.navigation.navigate(
              "talent_home_page",
              {
                userDetails: response?.res
              }
            );
          }
        })
      }
    }
    checkForUser();

    // Manually set user id...
    // client user id => 65199b3ddf213b73178fcd2e
    // talent user id => 651c328bfbdf0b55d9a793c4
    AsyncStorage.setItem("userId", "65199b3ddf213b73178fcd2e");

  }, []);

  return (
    <View
      style={{
        marginHorizontal: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 0.8,
      }}
    >
      <Image
        source={LogoDark}
        style={{
          height: 120,
          width: 280,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 120,
        }}
      ></Image>

      <View>
        <CTAButton
          dark
          title={"Login to existing account"}
          onPress={() => {
            props.navigation.navigate("login", {
              back_key: props.route.key,
            });
          }}
        />

        <CTAButton
          // dark
          // halfWidth
          title={"Create a new account"}
          onPress={() => {
            props.navigation.navigate("signup", {
              back_key: props.route.key,
            });
          }}
        />
      </View>
    </View>
  );
}

export default FirstPage;
