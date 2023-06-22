import React, { useState, useEffect } from "react";
import { Pressable, SafeAreaView, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { colors } from "../css/colors";
import { inputStyles } from "../css/interactables";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function InputField(props) {
  const {
    navigation,
    interactableIcon,
    placeholderText,
    isMultiLine,
    onTextChange,
    fieldKey,
    customCSS,
    passwordField,
    onBlur,
    onFocus,
    keyboardType = "default",
  } = props;

  const [visibility, setVisibility] = useState(true);

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
            style={inputStyles.inputField}
            placeholder={placeholderText}
            onChangeText={onTextChange}
            onBlur={onBlur}
            onFocus={onFocus}
            keyboardType={keyboardType}
            numberOfLines={1}
          />
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
            <FontAwesomeIcon
              icon={visibility ? faEye : faEyeSlash}
              size={24}
            />
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
