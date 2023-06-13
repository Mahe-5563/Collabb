import React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { colors } from "../css/colors";
import { inputStyles } from "../css/interactables";

function InputField(props) {
  const { 
    navigation, 
    interactableIcon,
    placeholderText,
    isMultiLine
  } = props;

  textFieldChange = (text) => {
    // console.info(text);
  }

  return (
    <SafeAreaView>

      {/* Single line input field */}
      {!isMultiLine && 
        <View 
          style={inputStyles.inputView}
        >
          {interactableIcon && 
            <FontAwesomeIcon
              style={inputStyles.interactableIcon}
              icon={interactableIcon}
              size={24}
            />
          }
          <TextInput 
            id="input_field" 
            style={inputStyles.inputField}
            placeholder={placeholderText}
            onChangeText={(text) => textFieldChange(text)}
          />
        </View>
      }
      
      {/* Multi line input field */}
      {isMultiLine && 
        <TextInput
          editable
          multiline
          id="paragraph_input"
          textAlignVertical="top"
          style={inputStyles.multilineInputView}
          placeholder={placeholderText}
          numberOfLines={9}
          
        />
        }
    </SafeAreaView>
  );
}

export default InputField;
