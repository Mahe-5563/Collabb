import React, {useEffect, useState} from "react";
import { useFonts } from "expo-font" 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiGetUserDetailsById } from "./src/api/account_creation";

import configureStore from "./store";
import { pages } from "./src/json/pages";
import { colors } from "./src/css/colors";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
let customFonts = {
  'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
  'Lato-Medium': require('./assets/fonts/Lato/Lato-Light.ttf'),
  'Lato-Thin': require('./assets/fonts/Lato/Lato-Thin.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
};

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);
  const [goToPage, setGoToPage] = useState(false);

  const store = configureStore();

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    }
  }

  useEffect(() => {
    
    async function checkForUser () {
      const userId = await AsyncStorage.getItem("userId");
      console.info(userId);
      if(userId) {
        apiGetUserDetailsById(userId, (response) => {
          const userType = response?.res?.usertype;
          // console.info("Details: ", response.res);
          if(userType == "client"){
            /* props.navigation.navigate(
              "client_home_page",
              {
                userDetails: response?.res
              }
            ); */
          } else if (userType == "talent") {
            /* props.navigation.navigate(
              "talent_home_page",
              {
                userDetails: response?.res
              }
            ); */
          }
        })
      }
    }
    checkForUser();

    // Manually set user id...
    // client user id => 64d60f1124a6ebaa30914850
    // talent user id => 64d68ff38a94dc2c39e74016
    // AsyncStorage.setItem("userId", "64d60f1124a6ebaa30914850");

  }, []);

  return (
    <Provider store={ store } >
    {fontsLoaded && 
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            contentStyle: {
              backgroundColor: colors.primary_color
            },
          }}
        >
          {pages.map(page => (
            <Stack.Group
              key={page.name}
              screenOptions={{
                animation: page.animation || "fade_from_bottom",
              }}
            >
              {page.active &&
                <Stack.Screen
                  key={page.name}
                  name={page.name}
                  component={page.component}
                /> 
              }
            </Stack.Group>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    }
    </Provider>
  );
}
