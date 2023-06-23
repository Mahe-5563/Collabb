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
import MultiSelect from "../../../components/multiselect";

function ComponentTalentAccount(props) {
  const [formValues, setFormValues] = useState({
    category: "",
    subcategory: "",
    location: "",
    description: "",
    skills: "",
    imgSrc: userImg,
    rate: "",
    paytype: "",
    experience: "",
  });
  const [selectedSkills, setSelectedSkills] = useState([]);

  const options = [
    {
      id: "1",
      label: "Label 1",
      value: "Value 1"
    },
    {
      id: "2",
      label: "Label 2",
      value: "Value 2"
    },
    {
      id: "3",
      label: "Label 3",
      value: "Value 3"
    },
    {
      id: "4",
      label: "Label 4",
      value: "Value 4"
    },
    {
      id: "5",
      label: "Label 5",
      value: "Value 5"
    },
    {
      id: "6",
      label: "Label 6",
      value: "Value 6"
    },
    {
      id: "7",
      label: "Label 7",
      value: "Value 7"
    },
    {
      id: "8",
      label: "Label 8",
      value: "Value 8"
    },
    {
      id: "9",
      label: "Label 9",
      value: "Value 9"
    },
    {
      id: "10",
      label: "Label 10",
      value: "Value 10"
    },
    {
      id: "11",
      label: "Label 11",
      value: "Value 11"
    },
    {
      id: "12",
      label: "Label 12",
      value: "Value 12"
    }
  ]

  useEffect(() => {
    console.info("formValues: ", formValues);
  }, [formValues]);
  
  const verifyAndProceed = () => {

  }

  return (
    <ScrollView
      style={{
        marginHorizontal: 15,
      }}
    >
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
      <View>
        <DropdownComponent
          // items={accountTypesList}
          prompt={"Select the category of your service *"}
          onValueChange={(value) => {
            setFormValues(prevValue => ({
              ...prevValue,
              category: value,
            }))
          }}
          stateValue={formValues.category}
        />
      </View>
      <View>
        <DropdownComponent
          // items={accountTypesList}
          prompt={"Select the subcategory of your service *"}
          onValueChange={(value) => {
            setFormValues(prevValue => ({
              ...prevValue,
              subcategory: value,
            }))
          }}
          stateValue={formValues.subcategory}
        />
      </View>
      <View>
        <MultiSelect
          items={options}
          setSelectedOptions={setSelectedSkills}
          selectedOptions={selectedSkills}
          placeholder={"Select your skills *"}
          searchPlaceholder={"Search for your skill"}
        />
      </View>
      <View>
        <DropdownComponent
          // items={accountTypesList}
          prompt={"Select your level of experience *"}
          onValueChange={(value) => {
            setFormValues(prevValue => ({
              ...prevValue,
              experience: value,
            }))
          }}
          stateValue={formValues.experience}
        />
        <Text
          style={[
            textStyles.tipMessage,
            setMargin(5).setMarginTop,
          ]}
        >
          You can update your experience later in your profile.
        </Text>
      </View>
      <DropdownComponentLocation
        customCSS={[
          setMargin(20).setMarginVertical,
        ]}
        placeholderText="Where are you from? *"
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
          placeholderText="(Mandatory) Give a brief description about your experience and previous works..."
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

export default ComponentTalentAccount;
