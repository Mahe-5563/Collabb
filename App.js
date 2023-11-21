import React, {useEffect, useState} from "react";
import { useFonts } from "expo-font" 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

import configureStore from "./store";
import { pages } from "./src/json/pages";
import { colors } from "./src/css/colors";

const Stack = createNativeStackNavigator();
let customFonts = {
  'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
  'Lato-Medium': require('./assets/fonts/Lato/Lato-Light.ttf'),
  'Lato-Thin': require('./assets/fonts/Lato/Lato-Thin.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
};

// SplashScreen.preventAutoHideAsync();
// SplashScreen.hideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

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
