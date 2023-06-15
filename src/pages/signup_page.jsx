import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";

import CTAButton from "../components/cta_button";
import InputField from "../components/input_field";
import { fontSize, setMargin, textHeaders } from "../css/common";
import { textStyles } from "../css/interactables";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../css/colors";

function Signup(props) {
  const [formValues, setFormValues] = useState({});
  const [checkValidity, setCheckValidity] = useState({});
  //   const [isValidCred, setIsValidCred] = useState(true);

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
    } else if (key == "field_first_name" || key == "field_last_name") {
      setCheckValidity((prevState) => ({
        ...prevState,
        [key]: formValues[key]?.length <= 1,
      }));
    }
  };

  return (
    <ScrollView
      style={{
        marginHorizontal: 15,
      }}
      automaticallyAdjustKeyboardInsets={true}
    >
      <View
        style={{
          marginTop: "17%",
        }}
      >
        <Pressable
          style={[
            setMargin("auto").setMarginLeft,
            setMargin(30).setMarginBottom,
            setMargin("10%").setMarginBottom,
          ]}
          onPress={() => {
            props.navigation.goBack(props.route.params.back_key);
          }}
        >
          <FontAwesomeIcon icon={faTimes} color={colors.grey_color} size={24} />
        </Pressable>

        <Text
          style={[
            setMargin("auto").setMarginLeft,
            setMargin("auto").setMarginRight,
            setMargin(50).setMarginBottom,
            fontSize(textHeaders).setFontSize,
          ]}
        >
          Create an Account
        </Text>

        <View style={[setMargin(25).setMarginBottom]}>
          <InputField
            fieldKey={"field_first_name"}
            placeholderText="First name"
            onTextChange={(text) => onTextChange("field_first_name", text)}
            onBlur={() => onBlur("field_first_name")}
          />
          {checkValidity["field_first_name"] == false && 
            <Text style={[textStyles.errorMessage, setMargin(10).setMarginLeft]}>
                Mandatory Field
            </Text>
          }
        </View>

        <View style={[setMargin(25).setMarginBottom]}>
          <InputField
            fieldKey={"field_last_name"}
            placeholderText="Last Name"
            onTextChange={(text) => onTextChange("field_last_name", text)}
            onBlur={() => onBlur("field_last_name")}
          />
          {checkValidity["field_last_name"] == false && 
            <Text style={[textStyles.errorMessage, setMargin(10).setMarginLeft]}>
              Mandatory Field
            </Text>
          }
        </View>

        <View style={[setMargin(25).setMarginBottom]}>
          <InputField
            fieldKey={"field_email"}
            placeholderText="Enter Email"
            onTextChange={(text) => onTextChange("field_email", text)}
            onBlur={() => onBlur("field_email")}
            keyboardType={"email-address"}
          />
          {checkValidity["field_email"] == false && 
            <Text style={[textStyles.errorMessage, setMargin(10).setMarginLeft]}>
              Invalid Email address
            </Text>
          }
        </View>

        <View style={[setMargin(25).setMarginBottom]}>
          <InputField
            passwordField
            fieldKey={"field_pwd"}
            placeholderText="Enter Password"
            onTextChange={(text) => onTextChange("field_pwd", text)}
            onBlur={() => onBlur("field_pwd")}
          />
          {checkValidity["field_pwd"] == false && 
            <Text style={[textStyles.errorMessage, setMargin(10).setMarginLeft]}>
              Invalid Password
            </Text>
          }
        </View>

        <CTAButton
          dark
          halfWidth
          title={"Signup"}
          //   onPress={proceedWithSignup}
          customCSS={[
            setMargin("auto").setMarginRight,
            setMargin("auto").setMarginLeft,
            setMargin(20).setMarginTop,
          ]}
        />
      </View>
    </ScrollView>
  );
}

export default Signup;
