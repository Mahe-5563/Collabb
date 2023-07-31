import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Pressable, Text, Modal } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Picker } from "@react-native-picker/picker";

import { colors } from "../css/colors";
import { dropdownStyles, multiSelectStyles, popupModal } from "../css/interactables";
import { appFontFamily, textHeaders, textSize, textSubheaders } from "../css/common";

function DropdownComponent(props) {
  const { 
    prompt, // Mandatory
    items, // Mandatory
    stateValue, // Mandatory
    onValueChange, // Mandatory
    customCSS,
  } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView>
      <View>
        <Pressable
          style={[
            dropdownStyles.dropdownView,
            ...(customCSS ? customCSS : []),
          ]}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          {stateValue ? 
            <Text 
              style={[
                dropdownStyles.dropdownField,
                dropdownStyles.dropdownTextField,
              ]}
            >
              {stateValue}
            </Text> : 
            <Text 
              style={[
                dropdownStyles.dropdownField,
                dropdownStyles.dropdownPlaceholderField,
              ]}
            >
              {prompt}
            </Text>
          }
          <FontAwesomeIcon 
            icon={faCaretDown} 
            style={{
              marginBottom: "auto",
              marginTop: "auto"
            }} 
          />
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={popupModal.modalView}>
            <View style={popupModal.modalBody}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={multiSelectStyles.closeIcon}
              >
                <FontAwesomeIcon 
                  icon={faTimes} 
                  size={22} 
                  color={colors.white}
                />
              </Pressable>
              <View style={dropdownStyles.customDropdownList}>
                <Text
                  style={{
                    fontSize: textSubheaders,
                    fontFamily: appFontFamily,
                    marginBottom: 20,
                    color: colors.light_color
                  }}
                >
                  {prompt}
                </Text>
                <ScrollView>
                  {items && items.map(item => (
                    <Pressable
                      key={item.id}
                      onPress={() => {
                        onValueChange(item.value);
                        setModalVisible(false);
                      }}
                      style={dropdownStyles.dropdownItems}
                    >
                      <Text
                        style={{
                          fontSize: textSize,
                          fontFamily: appFontFamily,
                        }}
                      >
                        {item.label}
                      </Text>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default DropdownComponent;
