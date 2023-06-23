import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import { colors } from "../css/colors";
import InputField from "./input_field";
import { dropdownStyles, multiSelectStyles, popupModal } from "../css/interactables";
import { countriesOfWorld } from "../json/locations";
import { textSize } from "../css/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function DropdownComponentLocation(props) {
  const { customCSS, valueSelection, value, placeholderText } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView>
      <View>
        <Pressable
          style={[
            dropdownStyles.customDropdown,
            ...(customCSS ? customCSS : []),
          ]}
          onPress={() => {
            console.info("Location selected.");
            setModalVisible(true);
          }}
        >
          {!value ? (
            <Text style={dropdownStyles.customDropdownTitlePlaceholder}>
              {placeholderText}
            </Text>
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: `https://flagcdn.com/80x60/${value.code.toLowerCase()}.png`,
                }}
                alt={value.name}
                resizeMethod="scale"
                style={{
                  width: 30,
                  height: 20,
                  marginRight: 20,
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
              <Text style={dropdownStyles.customDropdownTitle}>
                {value.name}
              </Text>
            </View>
          )}
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
                <FontAwesomeIcon icon={faTimes} size={22} color="#000" />
              </Pressable>
              <InputField
                placeholderText="Enter your location"
                onTextChange={(value) => {
                  setSearchQuery(value);
                }}
              />
              <ScrollView style={dropdownStyles.customDropdownList}>
                {countriesOfWorld
                  .filter((country) =>
                    country.name.toLowerCase().match(searchQuery.toLowerCase())
                  )
                  .map((country) => (
                    <Pressable
                      key={country.code}
                      onPress={() => {
                        console.info(country.name);
                        valueSelection(country);
                        setModalVisible(!modalVisible);
                      }}
                      style={[dropdownStyles.listItem]}
                    >
                      <Image
                        source={{
                          uri: `https://flagcdn.com/80x60/${country.code.toLowerCase()}.png`,
                        }}
                        alt={country.name}
                        resizeMethod="scale"
                        style={{
                          width: 30,
                          height: 20,
                          marginRight: 20,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: textSize,
                        }}
                      >
                        {country.name}
                      </Text>
                    </Pressable>
                  ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default DropdownComponentLocation;
