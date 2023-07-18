import * as React from "react";
import { useFonts } from "expo-font" 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";

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
          {pages.map(page => (
            <Stack.Group
              key={page.name}
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
