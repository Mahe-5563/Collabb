import * as React from "react";
import { useFonts } from "expo-font" 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/pages/loginpage";
import NewPage from "./src/pages/newpage";
import { colors } from "./src/css/colors";

const Stack = createNativeStackNavigator();
let customFonts = {
  'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
  'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
  'Poppins-Thin': require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
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
            name="NewPage"
            component={NewPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    }
    </>
  );
}
