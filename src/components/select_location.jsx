import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Modal, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";

import { colors } from "../css/colors";
import InputField from "./input_field";
import { dropdownStyles, popupModal } from "../css/interactables";
import { countriesOfWorld } from "../json/locations";
import { textSize } from "../css/common";

function DropdownComponentLocation(props) {
  const { 
    customCss, 
    valueSelection, 
    value, 
    placeholderText 
  } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView>
      <View>
        <Pressable
          style={[
            dropdownStyles.customDropdown,
            ...(customCss ? customCss : []),
          ]}
          onPress={() => {
            console.info("Location selected.")
            setModalVisible(true);
          }}
        >
          {!value ?
            <Text style={dropdownStyles.customDropdownTitlePlaceholder}>
              {placeholderText}
            </Text>
            :
            <View
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <Image
                source={{ uri: `https://flagcdn.com/80x60/${value.code.toLowerCase()}.png` }}
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
          }
        </Pressable>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View 
              style={popupModal.modalView}
            >
              <View 
                style={popupModal.modalBody}
              >
                <InputField 
                  placeholderText="Enter your location"
                  onTextChange={(value) => {
                    setSearchQuery(value);
                  }}
                />
                <ScrollView
                  style={dropdownStyles.customDropdownList}
                >
                  {countriesOfWorld.filter(country => country.name.toLowerCase().match(searchQuery.toLowerCase())).map(country => (
                    <Pressable
                      key={country.code}
                      onPress={() => {
                        console.info(country.name);
                        valueSelection(country);
                        setModalVisible(!modalVisible);
                      }}
                      style={[
                        dropdownStyles.listItem,
                      ]}
                    >
                      <Image
                        source={{ uri: `https://flagcdn.com/80x60/${country.code.toLowerCase()}.png` }}
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
