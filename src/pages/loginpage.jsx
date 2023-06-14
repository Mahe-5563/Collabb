import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-native";

import LogoDark from "../../assets/images/logo_dark.png";
import CTAButton from "../components/cta_button";
import InputField from "../components/input_field";
import {
  customValue,
  setMargin,
  orSplit,
  textColor,
} from "../css/common";
import { textStyles } from "../css/interactables";
import { colors } from "../css/colors";

function Login(props) {
  const [formValues, setFormValues] = useState([]);

  const onTextChange = (key, value) => {
    console.info(key + ": " + value);
  };

  return (
    <SafeAreaView
      style={{
        marginHorizontal: 15,
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

      {/* Form component */}
      <View
        style={{
          marginTop: "20%",
        }}
      >
        <Text style={[
          textStyles.errorMessage,
          setMargin(35).setMarginLeft,
          setMargin(35).setMarginRight,
          setMargin(20).setMarginBottom,
          customValue("textAlign", "center").setCustomValue,
        ]}>
          Are you sure you've entered the right credentials? There seems to be something wrong!
        </Text>
        <InputField
          fieldKey={"field_email"}
          placeholderText="Enter Email"
          onTextChange={(text) => onTextChange("field_email", text)}
          onBlur={() => {}}
          keyboardType={"email-address"}
        />
        <Text 
          style={[
            textStyles.errorMessage,
            setMargin(10).setMarginLeft
          ]}
        >
          Error Message
        </Text>

        <InputField
          passwordField
          fieldKey={"field_pwd"}
          placeholderText="Enter Password"
          onTextChange={(text) => onTextChange("field_pwd", text)}
          customCSS={[setMargin(15).setMarginTop]}
        />
        <Text 
          style={[
            textStyles.errorMessage,
            setMargin(10).setMarginLeft
          ]}
        >
          Error Message
        </Text>

        <CTAButton
          dark
          halfWidth
          title={"Login"}
          onPress={() => {
            console.info("Login Button clicked!");
          }}
          customCSS={[
            setMargin("auto").setMarginRight,
            setMargin("auto").setMarginLeft,
            setMargin(20).setMarginTop,
          ]}
        />

        <Pressable
          style={[
            setMargin(10).setMarginTop,
            setMargin("auto").setMarginLeft,
            setMargin("auto").setMarginRight
          ]}
          onPress={() => {
            console.info("Forgot password!")
          }}
        >
          <Text 
            style={[
              textColor(colors.primary_complementary_dark).setTextColor
            ]}
          >
            Forgot Password
          </Text>
        </Pressable>

        <View
          style={[
            orSplit.splitter,
            setMargin(30).setMarginTop,
            setMargin(30).setMarginBottom,
          ]}
        >
          <View style={orSplit.splitLine} />
          <Text style={orSplit.orText}> OR </Text>
          <View style={orSplit.splitLine} />
        </View>

        <CTAButton
          // dark
          // halfWidth
          title={"Create a new account"}
          onPress={() => {
            console.info("New account Button clicked!");
          }}
          customCSS={[
            setMargin(30).setMarginRight,
            setMargin(30).setMarginLeft,
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

export default Login;
