import { useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";

import {
  inputStyles,
  multiSelectStyles,
  buttons,
  popupModal,
} from "../css/interactables";
import { colors } from "../css/colors";
import {
  ctaPrimary,
  ctaSecondary,
  ctaTextPrimary,
  ctaTextSecondary,
  display,
  fontFamily,
  fontSize,
  setMargin,
} from "../css/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Modal, Button } from "react-native";

function MultiSelect(props) {
  let {
    items, // Mandatory
    setSelectedOptions, // Mandatory
    selectedOptions, // Mandatory
    placeholder, // Mandatory
    searchPlaceholder, // Mandatory
  } = props;
  const [inputValue, setInputValue] = useState("");
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    if (!showModal) setInputValue("");
  }, [showModal]);

  const handleCheckboxSelection = (selectedOption) => {
    if (selectedOption) {
      if (
        selectedOptions.filter((option) => option.id == selectedOption.id)
          .length > 0
      ) {
        setSelectedOptions(
          selectedOptions.filter((option) => option.id != selectedOption.id)
        );
      } else {
        setSelectedOptions((prevState) => [...prevState, selectedOption]);
      }
    }
  };

  return (
    <SafeAreaView>
      <Pressable
        style={multiSelectStyles.multiSelectTitleContainer}
        onPress={() => setshowModal(true)}
      >
        <Text style={multiSelectStyles.multiSelectTitle}>
          {placeholder || "Select your options"}
        </Text>
        <FontAwesomeIcon 
          icon={faCaretDown} 
          style={{
            marginBottom: "auto",
            marginTop: "auto"
          }} 
        />
      </Pressable>
      <View style={multiSelectStyles.selectedOptions}>
        {selectedOptions &&
          selectedOptions.map((option) => (
            <View key={option.id} style={multiSelectStyles.selectedItem}>
              <View style={[multiSelectStyles.selectedItemPadding]}>
                <Text
                  style={[
                    multiSelectStyles.selectedItemText,
                    setMargin(10).setMarginRight,
                  ]}
                  numberOfLines={1}
                >
                  {option.label}
                </Text>
              </View>
              <Pressable
                style={[
                  multiSelectStyles.selectedItemCross,
                  setMargin("auto").setMarginTop,
                  setMargin("auto").setMarginBottom,
                  multiSelectStyles.selectedItemPadding,
                ]}
                android_ripple={{
                  color: colors.primary_complementary_medium,
                }}
                onPress={() => handleCheckboxSelection(option)}
              >
                <FontAwesomeIcon icon={faTimes} size={18} color="#000" />
              </Pressable>
            </View>
          ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setshowModal(false);
        }}
      >
        <View style={popupModal.modalView}>
          <View style={popupModal.modalBody}>
            <Pressable
              onPress={() => setshowModal(false)}
              style={multiSelectStyles.closeIcon}
            >
              <FontAwesomeIcon 
                icon={faTimes} 
                size={22} 
                color={colors.white} 
              />
            </Pressable>
            <View style={inputStyles.inputView}>
              <TextInput
                style={inputStyles.inputField}
                onChangeText={setInputValue}
                placeholder={searchPlaceholder}
              />
            </View>
            <View style={multiSelectStyles.dropdownValues}>
              <ScrollView
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.secondary_color,
                }}
              >
                {items
                  .filter((item) => item.label.match(inputValue))
                  .map((item) => (
                    <Pressable
                      key={item.id}
                      onPress={() => handleCheckboxSelection(item)}
                    >
                      <View style={multiSelectStyles.individualItem}>
                        <Checkbox
                          key={item.id}
                          style={[setMargin(15).setMarginRight]}
                          value={
                            selectedOptions.filter(
                              (option) => option.id == item.id
                            ).length > 0
                          }
                          color={colors.success_color}
                          onValueChange={() => handleCheckboxSelection(item)}
                        />
                        <Text
                          style={[
                            fontSize(18).setFontSize,
                            setMargin("auto").setMarginTop,
                            setMargin("auto").setMarginBottom,
                            fontFamily().setFontFamily,
                          ]}
                        >
                          {item.label}
                        </Text>
                      </View>
                    </Pressable>
                  ))}
              </ScrollView>
              <View style={buttons.multiDDButtonContainer}>
                <Pressable
                  style={[buttons.dropdownButton, ctaPrimary().setCTAbgColor]}
                  onPress={() => {
                    setSelectedOptions(selectedOptions);
                    setshowModal(false);
                  }}
                >
                  <Text
                    style={[buttons.textStyle, ctaTextPrimary().setCTAColor]}
                  >
                    Cancel
                  </Text>
                </Pressable>
                <Pressable
                  style={[buttons.dropdownButton, ctaSecondary().setCTAbgColor]}
                  onPress={() => {
                    setSelectedOptions(selectedOptions);
                    setshowModal(false);
                  }}
                >
                  <Text
                    style={[buttons.textStyle, ctaTextSecondary().setCTAColor]}
                  >
                    Done
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default MultiSelect;
