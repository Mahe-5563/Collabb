import React, { useState, useEffect } from "react";
import { View, Modal, Text, Pressable, Animated } from "react-native";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import CTAButton from "../../components/cta_button";
import { multiSelectStyles, popupModal } from "../../css/interactables";
import { appFontFamily, setMargin, textHeaders, textSubheaders } from "../../css/common";
import InputField from "../../components/input_field";

function ApplyJobShrtDescription(props) {
  const { 
    navigation, 
    showModal, 
    setShowModal,
    setSubmitting,
    showSuccessModal,
    setShowSuccessModal,
    handleJobApply,
  } = props;

  // const [progress, setProgress] = useState(new Animated.Value(0));

  /* useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []) */
  

  return (
    <>
      <Modal
        transparent
        animationType="slide"
        onRequestClose={() => setShowModal(!showModal)}
        visible={showModal}
      >
        <View style={popupModal.modalView}>
          <View style={popupModal.modalBody}>
            <Pressable
              style={multiSelectStyles.closeIcon}
              onPress={() => setShowModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} size={20} color="white" />
            </Pressable>
            <View style={[setMargin(10).setMarginBottom]}>
              <Text style={[popupModal.subcategoryTitle]}>
                {
                  "Give us a short description about your interest towards this job role."
                }
              </Text>
              <Text
                style={[
                  popupModal.subcategoryTip,
                  setMargin(15).setMarginVertical,
                ]}
              >
                {
                  "Why do we ask this?\nThe description gives the Client a better understanding of your skills and how committed you will be towards the task."
                }
              </Text>
              <InputField
                isMultiLine
                placeholderText={"Type here..."}
                onTextChange={() => {}}
                fieldKey={"text_field_reason"}
              />
            </View>
            <View
              style={{
                width: "70%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <CTAButton
                dark
                title={"Submit"}
                onPress={() => {
                  handleJobApply();
                  setSubmitting(true);
                  setShowModal(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        transparent
        animationType="slide"
        onRequestClose={() => setShowSuccessModal(!showSuccessModal)}
        visible={showSuccessModal}
      >
        <View style={popupModal.modalView}>
          <View 
            style={[
              popupModal.modalBody,
              {
                alignItems: "center"
              }
            ]}
          >
            <FontAwesomeIcon 
              icon={faCircleCheck} 
              size={80} 
              color="#4caf50"
            />

            <Text
              style={{
                marginVertical: 10,
                fontSize: 40,
                fontFamily: appFontFamily,
              }}
            >
              {"Great!"}
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: textHeaders,
                fontFamily: appFontFamily,
                textAlign: "center"
              }}
            >
              {"Your application is submitted successfully!"}
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: textSubheaders,
                fontFamily: appFontFamily,
                textAlign: "center"
              }}
            >
              {"Please wait while the Client reviews your profile and contacts you."}
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 12,
                fontFamily: appFontFamily,
                textAlign: "center"
              }}
            >
              {"You will be redirected to the home page in a jiffy!"}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ApplyJobShrtDescription;
