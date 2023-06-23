import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";

import { setMargin } from "../../../css/common";
import { textStyles } from "../../../css/interactables";
import InputField from "../../../components/input_field";
import DropdownComponent from "../../../components/dropdown";
import DropdownComponentLocation from "../../../components/select_location";
import CTAButton from "../../../components/cta_button";
import userImg from "../../../../assets/images/user.png";
import UploadImage from "../../../components/upload_image";

function ComponentClientAccount(props) {
  const [formValues, setFormValues] = useState({
    accountType: "",
    organisationName: "",
    location: "",
    description: "",
    website: "",
    imgSrc: userImg,
  });
  // const [imgSrc, setImgSrc] = useState(userImg)

  const accountTypesList = [
    {
      id: "1",
      label: "Organisation",
      value: "Organisation",
    },
    {
      id: "2",
      label: "Personal",
      value: "Personal",
    }
  ];

  useEffect(() => {
    console.info("formValues: ", formValues);
  }, [formValues]);
  
  const verifyAndProceed = () => {

    if(
      ((formValues.accountType == "Organisation" && formValues.organisationName) || formValues.accountType == "Personal") && 
      formValues.description && 
      formValues.location &&
      formValues.imgSrc != userImg
    ) {
      console.info('Able to proceed')
    } else {
      Alert.alert("Oops!", "Mandatory fields are missing");
    }
  }

  return (
    <ScrollView
      style={{
        marginHorizontal: 15,
      }}
    >
      <View>
        <UploadImage 
          imgSrc={formValues.imgSrc}
          height={150}
          width={150}
          alt={"Upload profile picture"}
          label={"Upload Profile Image*"}
          uploadFunction={(result) => {
            if(!result.cancelled) {
              setFormValues(prevState => ({
                ...prevState,
                imgSrc: { uri: result.uri },
              }));
            }
          }}
          customCSS={[
            setMargin("auto").setMarginLeft,
            setMargin("auto").setMarginRight,
            setMargin("10%").setMarginBottom
          ]}
        />
        <DropdownComponent
          items={accountTypesList}
          prompt={"Select the type of your account *"}
          onValueChange={(value) => {
            setFormValues(prevValue => ({
              ...prevValue,
              accountType: value,
            }))
          }}
          stateValue={formValues.accountType}
        />
        <Text
          style={textStyles.tipMessage}
        >
          Tip: If you are looking to work with freelancers and small-scale businesses, opt for Organisation. 
          If you are looking to work with only small-scale businesses, opt for Personal.
        </Text>
        
      </View>
      {formValues.accountType == "Organisation" && 
        <View
          style={[
            setMargin(20).setMarginTop
          ]}
        >
          <InputField
            placeholderText="Organisation Name *"
            onTextChange={(value) => {
              setFormValues(prevValue => ({
                ...prevValue,
                organisationName: value
              }))
            }}
          />
        </View>
      }
      <DropdownComponentLocation
        customCSS={[
          setMargin(20).setMarginVertical,
        ]}
        placeholderText="Select Country *"
        valueSelection={(country) => {
          setFormValues(prevValue => ({
            ...prevValue,
            location: country
          }))
        }}
        value={formValues.location}
      />
      <View
        style={[
          setMargin(20).setMarginTop
        ]}
      >
        <InputField
          isMultiLine
          placeholderText="(Mandatory) Mention a short description about what you do..."
          onTextChange={(value) => {
            setFormValues(prevValue => ({
              ...prevValue,
              description: value
            }))
          }}
        />
        <Text
          style={[
            textStyles.tipMessage,
            setMargin(5).setMarginTop,
          ]}
        >
          Tip:  The more details you give, the candidate will have an idea on what you do and how they can help you effectively.
        </Text>
      </View>
      <View
        style={[
          setMargin(20).setMarginTop
        ]}
      >
        <InputField
          placeholderText="Include a link of your professional profile or website"
          onTextChange={(value) => {
            setFormValues(prevValue => ({
              ...prevValue,
              website: value
            }))
          }}
        />
        <Text
          style={[
            textStyles.tipMessage,
            setMargin(5).setMarginTop,
          ]}
        >
          Tip: Your professional profile or portfolio website helps the candidates understand your scope much better.
        </Text>
      </View>

      <CTAButton
        dark
        halfWidth
        title={"Proceed"}
        customCSS={[
          setMargin(40).setMarginVertical,
          setMargin("auto").setMarginLeft,
          setMargin("auto").setMarginRight,
        ]}
        onPress={verifyAndProceed}
      />
    </ScrollView>
  );
}

export default ComponentClientAccount;
