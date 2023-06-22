import { useEffect, useState } from "react";
import { SafeAreaView,View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { Picker } from "@react-native-picker/picker";

import { colors } from "../css/colors";
import { dropdownStyles } from "../css/interactables";
import { appFontFamily, textSize } from "../css/common";

function DropdownComponent(props) {
  const { 
    prompt,
    items,
    stateValue,
    onValueChange
  } = props;

  return (
    <SafeAreaView>
      <View
        style={dropdownStyles.dropdownView}
      >
        <Picker
          style={dropdownStyles.dropdownView}
          selectedValue={stateValue || ""} 
          onValueChange={onValueChange}
          dropdownIconColor={colors.secondary_color}
          // prompt={prompt}
          placeholder={prompt}
        >
          <Picker.Item 
            key={"default_key"}
            label={prompt}
            enabled={false}
            style={{
              color: colors.grey_color,
              fontSize: textSize,
              fontFamily: appFontFamily,
            }}
          />
          {items && items.map(item => (
            <Picker.Item 
              key={item.id}
              label={item.label} 
              value={item.value} 
              style={{
                fontFamily: appFontFamily,
              }}
            />
          ))}
        </Picker>
      </View>
    </SafeAreaView>
  );
}

export default DropdownComponent;
