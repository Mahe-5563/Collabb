import * as React from "react";
import { useFonts } from "expo-font" 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";

import Login from "./src/pages/loginpage";
import { colors } from "./src/css/colors";
import Signup from "./src/pages/signup_page";
import IdentifyPurpose from "./src/pages/signup_process/identify_purpose";
import configureStore from "./store";

const Stack = createNativeStackNavigator();
let customFonts = {
  'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
  'Lato-Medium': require('./assets/fonts/Lato/Lato-Light.ttf'),
  'Lato-Thin': require('./assets/fonts/Lato/Lato-Thin.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
};

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  const store = configureStore();

  return (
    <Provider store={ store } >
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
          {/* <Stack.Screen 
            name="login"
            component={Login}
          /> */}
          <Stack.Screen 
            name="signup"
            component={Signup}
          />
          <Stack.Screen
            name="identify_purpose"
            component={IdentifyPurpose}
          />
        </Stack.Navigator>
      </NavigationContainer>
    }
    </Provider>
  );
}
