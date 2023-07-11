import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
} from "react-native";
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
import { apiCreateAccount } from "../api/account_creation";

function Login(props) {
  const [formValues, setFormValues] = useState({});
  const [checkValidity, setCheckValidity] = useState({});
  const [isValidCred, setIsValidCred] = useState(true);

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onTextChange = (key, value) => {
    setFormValues(prevState => (
      {...prevState, [key]: value}
    ))
    if(key == "field_email") {
      setTimeout(() => {
        if(checkValidity[key] == false) {
          setCheckValidity(prevState => (
            { ...prevState, [key]: emailRegex.test(formValues[key]) }
          ))  
        }
      }, 500);
    } else if (key == "field_pwd") {
      setTimeout(() => {
        if(checkValidity[key] == false && formValues[key]?.length > 0) {
          setCheckValidity(prevState => (
            { ...prevState, [key]: formValues[key]?.length > 6 && formValues[key]?.length < 20 }
          ));
        }
      }, 500);
    }
  };

  const onBlur = (key) => {
    if(key == "field_email" && formValues) {
      setCheckValidity(prevState => (
        { ...prevState, [key]: emailRegex.test(formValues[key]) }
      ))
    } else if (key == "field_pwd" && formValues) {
      setCheckValidity(prevState => (
        { ...prevState, [key]: formValues[key]?.length > 6 && formValues[key]?.length < 20 }
      ));
    }
  }

  const proceedWithLogin = () => {
    console.info("Login Button clicked!");
  }

  return (
    <ScrollView
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
        {!isValidCred && 
          <Text style={[
            textStyles.errorMessage,
            setMargin(35).setMarginLeft,
            setMargin(35).setMarginRight,
            setMargin(20).setMarginBottom,
            customValue("textAlign", "center").setCustomValue,
          ]}>
            Are you sure you've entered the right credentials? There seems to be something wrong!
          </Text>
        }
        <InputField
          fieldKey={"field_email"}
          placeholderText="Enter Email"
          onTextChange={(text) => onTextChange("field_email", text)}
          onBlur={() => onBlur("field_email")}
          keyboardType={"email-address"}
        />
        {checkValidity["field_email"] == false && 
          <Text 
            style={[
              textStyles.errorMessage,
              setMargin(10).setMarginLeft
            ]}
          >
            Invalid Email address
          </Text>
        }

        <InputField
          passwordField
          fieldKey={"field_pwd"}
          placeholderText="Enter Password"
          onTextChange={(text) => onTextChange("field_pwd", text)}
          onBlur={() => onBlur("field_pwd")}
          keyboardType={"visible-password"}
          customCSS={[setMargin(15).setMarginTop]}
        />
        {checkValidity["field_pwd"] == false && 
          <Text 
            style={[
              textStyles.errorMessage,
              setMargin(10).setMarginLeft
            ]}
          >
            Invalid Password
          </Text>
        }

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
            props.navigation.navigate("signup", {
              back_key: props.route.key,
            });
            // apiCreateAccount({ test: "hello world" });
          }}
          customCSS={[
            setMargin(30).setMarginRight,
            setMargin(30).setMarginLeft,
          ]}
        />
      </View>
    </ScrollView>
  );
}

export default Login;
