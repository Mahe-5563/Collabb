import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
  appFontFamily,
  appFontFamilyBold,
  marginCenter,
  orSplit,
  setMargin,
  setPadding,
  textSize,
  textSubheaders,
} from "../../css/common";
import { colors } from "../../css/colors";
import Navbar from "../../components/navbar";
import ImgButton from "../../components/img_button";
import btnImg from "../../../assets/images/btnImg.png";
import SearchField from "../../components/search_field";
import { freelanceCategories } from "../../json/cat_subcat";
import { multiSelectStyles, popupModal } from "../../css/interactables";

function ClientChooseCatSubcat(props) {
  const [searchValue, setSearchValue] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [categorySelection, setCategorySelection] = useState();
  return (
    <>
      <SafeAreaView>
        <Navbar {...props} goToHome title="Category" homePage={""} />
      </SafeAreaView>
      <View
        style={[
          setMargin(10).setMarginHorizontal,
          setMargin(20).setMarginVertical,
        ]}
      >
        <SearchField
          onChangeText={(text) => setSearchValue(text)}
          onPress={() => {}}
          value={searchValue}
          dropdownOptions={freelanceCategories}
        />
      </View>
      <View style={[orSplit.splitter, setPadding(10).setPaddingBottom]}>
        <View style={orSplit.splitLine} />
        <Text style={orSplit.orText}> OR </Text>
        <View style={orSplit.splitLine} />
      </View>
      <Text
        style={{
          fontFamily: appFontFamilyBold,
          fontSize: textSubheaders,
          marginHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        {"Choose one of our Popular Categories"}
      </Text>
      <ScrollView style={[setPadding(10).setPaddingVertical]}>
        {freelanceCategories.map((category) => (
          <ImgButton
            key={`imgbutton_${category.id}`}
            bgImg={btnImg}
            title={category.label}
            onPress={() => {
              // console.info(category)
              setCategorySelection(category);
              setModalVisible(true);
            }}
            customCSS={[setMargin(25).setMarginBottom]}
          />
        ))}
      </ScrollView>
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
            <Text style={popupModal.subcategoryTitle}> Select your sub-category </Text>
            {categorySelection && 
              <ScrollView
                style={popupModal.subcategoryContainer}
              >
                {categorySelection.subcategories.map(subcate => (
                  <Pressable
                    key={subcate.id}
                    onPress={() => console.info(subcate)}
                  >
                    <Text 
                      style={popupModal.subcategoryList}
                    >
                      {subcate.label}
                      {subcate.status == "new" && 
                        <FontAwesomeIcon 
                          icon={faStar} 
                          style={{
                            marginLeft: 30,
                          }}
                        />
                      }
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            }
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ClientChooseCatSubcat;
