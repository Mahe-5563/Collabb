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
    account_type: "",
    organisation_name: "",
    location: "",
    description: "",
    website: "",
    profile_photo: "",
  });
  // const [profile_photo, setImgSrc] = useState(userImg)

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
    // console.info("formValues: ", formValues);
  }, [formValues]);

  return (
    <ScrollView
      style={{
        marginHorizontal: 15,
      }}
    >
      <View
        style={[
          setMargin(20).setMarginBottom
        ]}
      >
        <UploadImage 
          imgSrc={formValues.profile_photo || userImg}
          height={150}
          width={150}
          alt={"Profile Picture"}
          label={"Upload Profile Image*"}
          uploadFunction={(result) => {
            if(!result.cancelled) {
              setFormValues(prevState => ({
                ...prevState,
                profile_photo: { uri: result.uri },
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
          prompt={"Select your account type *"}
          onValueChange={(value) => {
            setFormValues(prevValue => ({
              ...prevValue,
              account_type: value,
            }))
          }}
          stateValue={formValues.account_type}
        />
        <Text
          style={[
            textStyles.tipMessage,
            setMargin(5).setMarginTop
          ]}
        >
          Tip: If you are looking to work with freelancers and small-scale businesses, opt for Organisation. 
          If you are looking to work with only small-scale businesses, opt for Personal.
        </Text>
        
      </View>
      {formValues.account_type == "Organisation" && 
        <View
          style={[
            setMargin(20).setMarginBottom
          ]}
        >
          <InputField
            placeholderText="Organisation Name *"
            onTextChange={(value) => {
              setFormValues(prevValue => ({
                ...prevValue,
                organisation_name: value
              }))
            }}
          />
        </View>
      }
      <View
        style={[
          setMargin(20).setMarginBottom,
        ]}
      >
        <DropdownComponentLocation
          placeholderText="Select Location *"
          valueSelection={(country) => {
            setFormValues(prevValue => ({
              ...prevValue,
              location: country
            }))
          }}
          value={formValues.location}
        />
      </View>
      <View
        style={[
          setMargin(20).setMarginBottom
        ]}
      >
        <InputField
          isMultiLine
          placeholderText="(Mandatory) Describe what you do..."
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
          setMargin(20).setMarginBottom
        ]}
      >
        <InputField
          placeholderText="Link to your professional profile or website"
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
        onPress={() => props.proceedToSummary(formValues)}
      />
    </ScrollView>
  );
}

export default ComponentClientAccount;
