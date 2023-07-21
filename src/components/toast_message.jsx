import React, { useRef, useEffect } from "react";
import { View, Text, Pressable, SafeAreaView, Animated, } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLeftLong,
  faBell,
  faChevronLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { toastMessageStyle } from "../css/interactables";

function ToastMessage(props) {
  const { 
    showToast = false, 
    setShowToast,
    
  } = props;

  const fadeDuration = 500;
  const fadeTimeout = 5000;

  const fadeAnimation = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    if(showToast) {
      fadeIn();
      setTimeout(() => {
        fadeOut();
        setShowToast(false);
      }, fadeTimeout);
    }
  }, [showToast])
  

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: fadeDuration,
      useNativeDriver: true,
    }).start();
  }

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: fadeDuration,
      useNativeDriver: true,
    }).start();
  }
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          toastMessageStyle.toastMessageContainer,
          { opacity: fadeAnimation }
        ]}
      >
        <Text 
          style={toastMessageStyle.toastMessageText}
        >
          Toast Message
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
}

export default ToastMessage;
