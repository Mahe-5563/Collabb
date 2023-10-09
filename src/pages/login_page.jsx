import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

import CTAButton from "../components/cta_button";
import InputField from "../components/input_field";
import {
  customValue,
  setMargin,
  orSplit,
  textColor,
  textHeaderLarge,
  appFontFamilyBold,
  appFontFamily,
  textSize,
} from "../css/common";
import { colors } from "../css/colors";
import { textStyles } from "../css/interactables";

function LoginPage(props) {
  const [formValues, setFormValues] = useState({});
  const [checkValidity, setCheckValidity] = useState({});
  const [isValidCred, setIsValidCred] = useState(true); // Yet to implement...

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onTextChange = (key, value) => {
    setFormValues((prevState) => ({ ...prevState, [key]: value }));
    if (key == "field_email") {
      setTimeout(() => {
        if (checkValidity[key] == false) {
          setCheckValidity((prevState) => ({
            ...prevState,
            [key]: emailRegex.test(formValues[key]),
          }));
        }
      }, 500);
    } else if (key == "field_pwd") {
      setTimeout(() => {
        if (checkValidity[key] == false && formValues[key]?.length > 0) {
          setCheckValidity((prevState) => ({
            ...prevState,
            [key]: formValues[key]?.length > 6 && formValues[key]?.length < 20,
          }));
        }
      }, 500);
    }
  };

  const onBlur = (key) => {
    if (key == "field_email" && formValues) {
      setCheckValidity((prevState) => ({
        ...prevState,
        [key]: emailRegex.test(formValues[key]),
      }));
    } else if (key == "field_pwd" && formValues) {
      setCheckValidity((prevState) => ({
        ...prevState,
        [key]: formValues[key]?.length > 6 && formValues[key]?.length < 20,
      }));
    }
  };

  const proceedWithLogin = () => {
    console.info("Login Button clicked!");
  };

  return (
    <View
      style={[setMargin("50%").setMarginTop, setMargin(20).setMarginHorizontal]}
    >
      <Text
        style={{
          fontSize: textHeaderLarge,
          marginBottom: 50,
          textAlign: "center",
          fontFamily: appFontFamilyBold,
        }}
      >
        Log in to your account
      </Text>
      {!isValidCred && (
        <Text
          style={[
            textStyles.errorMessage,
            setMargin(35).setMarginLeft,
            setMargin(35).setMarginRight,
            setMargin(20).setMarginBottom,
            customValue("textAlign", "center").setCustomValue,
          ]}
        >
          Are you sure you've entered the right credentials? There seems to be
          something wrong!
        </Text>
      )}
      <InputField
        fieldKey={"field_email"}
        placeholderText="Enter Email"
        onTextChange={(text) => onTextChange("field_email", text)}
        onBlur={() => onBlur("field_email")}
        keyboardType={"email-address"}
      />
      {checkValidity["field_email"] == false && (
        <Text style={[textStyles.errorMessage, setMargin(10).setMarginLeft]}>
          Invalid Email address
        </Text>
      )}

      <InputField
        passwordField
        fieldKey={"field_pwd"}
        placeholderText="Enter Password"
        onTextChange={(text) => onTextChange("field_pwd", text)}
        onBlur={() => onBlur("field_pwd")}
        keyboardType={"visible-password"}
        customCSS={[setMargin(15).setMarginTop]}
      />
      {checkValidity["field_pwd"] == false && (
        <Text style={[textStyles.errorMessage, setMargin(10).setMarginLeft]}>
          Invalid Password
        </Text>
      )}

      <CTAButton
        dark
        halfWidth
        title={"Login"}
        onPress={proceedWithLogin}
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
          setMargin("auto").setMarginRight,
        ]}
        onPress={() => {
          console.info("Forgot password!");
        }}
      >
        <Text
          style={[
            textColor(colors.primary_complementary_dark).setTextColor,
            {
              fontFamily: appFontFamily,
              fontSize: textSize,
            },
          ]}
        >
          Forgot Password
        </Text>
      </Pressable>

      <Pressable
        style={[
          setMargin(20).setMarginTop,
          setMargin("auto").setMarginLeft,
          setMargin("auto").setMarginRight,
        ]}
        onPress={() => {
          props.navigation.navigate("signup", {
						back_key: props.route.key,
					});
        }}
      >
        <Text
          style={[
						textColor(colors.secondary_color_medium).setTextColor,
						{
              fontFamily: appFontFamily,
              fontSize: textSize,
            }
					]}
        >
          Don't have an account? <Text style={[textColor(colors.primary_complementary_dark).setTextColor]}>Signup</Text> here
        </Text>
      </Pressable>
    </View>
  );
}

export default LoginPage;
