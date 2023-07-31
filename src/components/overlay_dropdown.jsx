import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { dropdownStyles, inputStyles, overlayDropdownStyles } from "../css/interactables";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ScrollView } from "react-native";

function OverlayDropdown (props) {
  const { 
    navigation,
    items, // Mandatory
    placeholderText, // Mandatory
    setSelectedOption, // Mandatory
    selectedOption, // Mandatory
  } = props;

  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <View
      style={{
        position: "relative"
      }}
    >
      <Pressable
        style={[
          dropdownStyles.dropdownView
        ]}
        onPress={() => setOpenOverlay(!openOverlay)}
      >
        {selectedOption?.value ? 
          <Text 
            style={[
              dropdownStyles.dropdownField,
              dropdownStyles.dropdownTextField,
            ]}
          >
            {selectedOption?.value}
          </Text> : 
          <Text 
            style={[
              dropdownStyles.dropdownField,
              dropdownStyles.dropdownPlaceholderField,
            ]}
          >
            {placeholderText}
          </Text>
        }
        <FontAwesomeIcon 
          icon={faCaretDown}
        />
      </Pressable>
      {openOverlay && 
        <ScrollView
          style={[
            overlayDropdownStyles.overlayContainer
          ]}
        >
          {items?.map(listItem => (
            <Pressable
              key={`list_item_${listItem.id}`}
              onPress={() => {
                // console.info(listItem);
                setOpenOverlay(false);
                setSelectedOption(listItem);
              }}
            >
              <Text
                style={[ overlayDropdownStyles.overlayListItem ]}
              >
                {listItem?.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      }
    </View>
  );
}

export default OverlayDropdown;