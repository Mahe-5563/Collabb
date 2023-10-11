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
    
    /**
     * CLIENT TEST IDs:
     * 
     * John Doe - 65199b3ddf213b73178fcd2e
     * Di Caprio - 65252bad5f55857476f18008
     * Mathur - 651ec3b0c45892fb1df1c171
     * Joseph Beckham - 65252e235f55857476f18012
     * Kroos - 65252fd35f55857476f18017
     * 
     */

    /**
     * TALENT TEST IDs:
     * 
     * Franciso de Paula - 651c328bfbdf0b55d9a793c4
     * Messi - 64d68fde8a94dc2c39e74011
     * Dalí y Domenech - 64d68ff38a94dc2c39e74016
     * Jane Doe - 651aaf14a775be29376b7011
     * Guvera - 651c2f2038e0e9c23546b352
     * Brown - 65253707c7f03cecb4a9e8e7
     * Rowling - 65255261ea1611344d7d858c
     * Clear - 65255558ea1611344d7d8591
     * de Cervantes - 65255643ea1611344d7d8596
     * Collins - 652556f9ea1611344d7d859b
     * 
     */
    // Manually set user id...
    // AsyncStorage.setItem("userId", "65199b3ddf213b73178fcd2e");

    async function checkForUser () {
      const userId = await AsyncStorage.getItem("userId");
      console.info(userId);
      if(userId) {
        apiGetUserDetailsById(userId, (response) => {
          const userType = response?.res?.usertype;
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
