import React, { useState, useEffect } from "react";
import { Pressable, SafeAreaView, TextInput, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { colors } from "../css/colors";
import { inputStyles } from "../css/interactables";
import {
  faCircleInfo,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { appFontFamily, appFontFamilyBold } from "../css/common";

function InputField(props) {
  const {
    navigation,
    interactableIcon,
    placeholderText, // Mandatory
    isMultiLine,
    onTextChange, // Mandatory
    fieldKey, // Mandatory
    customCSS,
    passwordField,
    onBlur,
    onFocus,
    keyboardType = "default",
    info,
    half,
    tooltipContent,
    value
  } = props;

  const [visibility, setVisibility] = useState(true);
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <SafeAreaView>
      {/* Single line input field */}
      {!isMultiLine && !passwordField && (
        <View
          style={[inputStyles.inputView, ...(customCSS ? [customCSS] : [])]}
        >
          {interactableIcon && (
            <FontAwesomeIcon
              style={inputStyles.interactableIcon}
              icon={interactableIcon}
              size={24}
            />
          )}
          <TextInput
            key={fieldKey}
            style={[
              inputStyles.inputField,
              ...(half ? [{ width: "80%" }] : []),
            ]}
            placeholder={placeholderText}
            onChangeText={onTextChange}
            onEndEditing={onBlur}
            onFocus={onFocus}
            keyboardType={keyboardType}
            numberOfLines={1}
            value={value}
            onSubmitEditing={() => console.info("submitted!")}
          />
        </View>
      )}
      {info && (
        <View
          style={{
            position: "absolute",
            top: -10,
            right: 5,
          }}
        >
          <Pressable
            onPress={() => { setOpenTooltip(!openTooltip) }}
          >
            <FontAwesomeIcon icon={faCircleInfo} size={24} />
          </Pressable>
          {openTooltip && tooltipContent && 
            <View
              style={inputStyles.infoTooltip}
            >
              <Text
                style={{
                  fontFamily: appFontFamily,
                  fontSize: 16,
                }}
              >
                {tooltipContent}
              </Text>
            </View>
          }
        </View>
      )}

      {/* Password Field */}
      {passwordField && !isMultiLine && (
        <View
          style={[inputStyles.inputView, ...(customCSS ? [customCSS] : [])]}
        >
          <TextInput
            key={fieldKey}
            style={inputStyles.inputField}
            placeholder={placeholderText}
            onChangeText={onTextChange}
            secureTextEntry={visibility}
            onBlur={onBlur}
            onFocus={onFocus}
            keyboardType={keyboardType}
          />
          <Pressable
            style={inputStyles.visibilityIcon}
            onPress={() => setVisibility(!visibility)}
          >
            <FontAwesomeIcon icon={visibility ? faEye : faEyeSlash} size={24} />
          </Pressable>
        </View>
      )}

      {/* Multi line input field */}
      {isMultiLine && (
        <TextInput
          editable
          multiline
          key={fieldKey}
          textAlignVertical="top"
          style={inputStyles.multilineInputView}
          placeholder={placeholderText}
          numberOfLines={9}
          onChangeText={onTextChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      )}
    </SafeAreaView>
  );
}

export default InputField;
