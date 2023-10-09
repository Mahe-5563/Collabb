import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  Modal,
  TouchableHighlight,
  ToastAndroid,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  InteractionManager,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { faAngleRight, faCaretDown, faCaretUp, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
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
import newLogo from "../../../assets/icons/new-logo.png";
import { freelanceCategories } from "../../json/cat_subcat";
// import ToastMessage from "../../components/toast_message";
import { accordionStyles, multiSelectStyles, popupModal } from "../../css/interactables";
import { setCategoryAndSubcategory } from "../../../redux/actions/client";
import { toastMessage } from "../../js/common";

function ClientChooseCatSubcat(props) {
  // console.info("Props: ", props);
  const {
    clientDetails,
    setCategoryAndSubcategory,
    navigation,
  } = props;

  let scrollRef = useRef();

  const [searchValue, setSearchValue] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [categorySelection, setCategorySelection] = useState({});
  const [categoryValueBool, setCategoryValueBool] = useState(false);
  const [accordionIndex, setAccordionIndex] = useState();

  useEffect(() => {
    if(Platform.OS == "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])
  

  useEffect(() => {
    if(clientDetails?.cateSubcateSelection && categoryValueBool) {
      // setShowToast(true);
      // ToastAndroid.show("Selection Success!", 5000);
      toastMessage("Selection Success!");
      navigation.navigate(
        "poj_job_description",
        {
          back_key: props.route.key,
        }
      )
      setModalVisible(false);
    }
  }, [clientDetails?.cateSubcateSelection])

  const categoryAndSubCatSelection = (subcat) => {
    const obj = {
      category: { id: categorySelection.id, label: categorySelection.label, value: categorySelection.value, },
      subCategory: subcat
    };
    // console.info("obj: ", obj);
    setCategoryAndSubcategory(obj);
    setCategoryValueBool(true);
  }

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
      <ScrollView style={[setPadding(10).setPaddingVertical]} ref={scrlRef => scrollRef = scrlRef} >
        {/* {freelanceCategories.map((category) => (
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
        ))} */}
        {freelanceCategories.map((category, index) => (
          <View
            key={`category_${category.id}`}
            id={`category_${category.id}`}
          >
            <TouchableOpacity
              // key={`category_${category.id}`}
              // id={`category_${category.id}`}
              activeOpacity={0.4}
              style={accordionStyles.categoriesAccTitle}
              onPress={() => {
                // Provide animation for ease in and ease out of the Accordion
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                if(categorySelection?.id == category.id) {
                  setCategorySelection({});
                  setAccordionIndex();
                } else {
                  setAccordionIndex(index);
                  setCategorySelection(category);
                  scrollRef.scrollTo(`#category_${category.id}`);
                }
              }}
            >
              <Text
                style={accordionStyles.categoriesAccItem}
              >
                {category.label}
              </Text>
              <FontAwesomeIcon 
                style={{ marginTop: "auto", marginBottom: "auto" }}
                size={22}
                icon={categorySelection?.id == category.id ? faCaretUp : faCaretDown}
              />
            </TouchableOpacity>
            {accordionIndex == index && categorySelection?.subcategories?.map(subcate => 
              <Pressable
                key={`subcategory_${subcate.id}`}
                style={accordionStyles.subcateAccTitle}
                onPress={() => {
                  categoryAndSubCatSelection(subcate);
                }}
              >
                <Text
                  style={accordionStyles.subcateAccItem}
                >
                  {subcate.label}
                </Text>
                <FontAwesomeIcon 
                  style={{ marginTop: "auto", marginBottom: "auto", }}
                  icon={faAngleRight} 
                  size={16}
                />
              </Pressable>
            )}
          </View>
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
            <Text style={popupModal.subcategoryTitle}> {"Select your sub-category"} </Text>
            {categorySelection && 
              <ScrollView
                style={popupModal.subcategoryContainer}
              >
                {categorySelection?.subcategories?.map(subcate => (
                  <TouchableHighlight
                    key={subcate.id}
                    onPress={() => {
                      // console.info(subcate)
                      categoryAndSubCatSelection(subcate);
                    }}
                    underlayColor={colors.primary_color_medium}
                    style={popupModal.subcategoryPress}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                      }}
                    >
                      <Text 
                        style={popupModal.subcategoryList}
                      >
                        {subcate.label}
                      </Text>
                      {subcate.status == "new" && 
                        <Image
                          source={newLogo}
                          style={{
                            height: 30,
                            width: 30,
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: 15,
                          }}
                        />
                      }
                    </View>
                  </TouchableHighlight>
                ))}
              </ScrollView>
            }
          </View>
        </View>
      </Modal>
      {/* <ToastMessage
        showToast={showToast}
        setShowToast={setShowToast}
      /> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => {
  return {
    setCategoryAndSubcategory: (selection) => dispatch(setCategoryAndSubcategory(selection))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientChooseCatSubcat);
