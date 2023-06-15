import * as React from "react";
import { useFonts } from "expo-font" 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/pages/loginpage";
import { colors } from "./src/css/colors";
import Signup from "./src/pages/signup_page";

const Stack = createNativeStackNavigator();
let customFonts = {
  'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
  'Lato-Medium': require('./assets/fonts/Lato/Lato-Light.ttf'),
  'Lato-Thin': require('./assets/fonts/Lato/Lato-Thin.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
};

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  return (
    <>
    {fontsLoaded && 
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.primary_color
            }
          }}
        >
          <Stack.Screen 
            name="Login"
            component={Login}
          />
          <Stack.Screen 
            name="Signup"
            component={Signup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    }
    </>
  );
}
