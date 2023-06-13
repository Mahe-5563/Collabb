import { useEffect, useState } from "react";
import { SafeAreaView,View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { Picker } from "@react-native-picker/picker";

import { colors } from "../css/colors";
import { dropdownStyles } from "../css/interactables";

function DropdownComponent(props) {
  const { prompt, items } = props;
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    
    // console.info(selectedValue);
    
  }, [selectedValue])
  

  return (
    <SafeAreaView>
      <View
        style={dropdownStyles.dropdownView}
      >
        <Picker
          style={dropdownStyles.dropdownView}
          selectedValue={selectedValue} 
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          dropdownIconColor={colors.secondary_color}
          prompt={prompt}
        >
          {items && items.map(item => (
            <Picker.Item 
              key={item.id}
              label={item.label} 
              value={item.value} 
            />
          ))}
        </Picker>
      </View>
    </SafeAreaView>
  );
}

export default DropdownComponent;
