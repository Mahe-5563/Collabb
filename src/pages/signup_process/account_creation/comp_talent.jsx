import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";

import { customValue, setMargin } from "../../../css/common";
import { textStyles } from "../../../css/interactables";
import InputField from "../../../components/input_field";
import DropdownComponent from "../../../components/dropdown";
import DropdownComponentLocation from "../../../components/select_location";
import CTAButton from "../../../components/cta_button";
import userImg from "../../../../assets/images/user.png";
import UploadImage from "../../../components/upload_image";
import MultiSelect from "../../../components/multiselect";
import { freelanceCategories, smallScaleBusinessCategories } from "../../../json/cat_subcat";
import { experienceLevel } from "../../../json/experience";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

function ComponentTalentAccount(props) {
  const [formValues, setFormValues] = useState({
    category: "",
    category_id: "",
    sub_category: "",
    sub_category_id: "",
    location: "",
    description: "",
    skills: "",
    profile_photo: "",
    rate: "",
    pay_type: "",
    experience: "",
  });
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const cats_n_subcats = [
    ...freelanceCategories,
    // ...smallScaleBusinessCategories,
  ];

  const payType = [
    {
      id: "1",
      label: "Per Hour",
      value: "Per Hour",
    },
    {
      id: "2",
      label: "Per Project",
      value: "Per Project",
    }
  ]

  const skills = [
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
    if(formValues.category) {
      setSubcategories(cats_n_subcats.filter(item => item.label == formValues.category)[0]?.subcategories);
    }
  }, [formValues.category]);

  useEffect(() => {
    if(selectedSkills) {
      setFormValues(prevState => ({
        ...prevState,
        skills: selectedSkills,
      }));
    }
  }, [selectedSkills])

  return (
    <ScrollView
      style={{
        marginHorizontal: 15,
      }}
    >
      <UploadImage 
        imgSrc={formValues.profile_photo || userImg}
        height={150}
        width={150}
        alt={"Upload profile picture"}
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
      <View style={setMargin(formValues.category ? 24 : 20).setMarginBottom}>
        {cats_n_subcats && 
          <DropdownComponent 
            items={cats_n_subcats}
            prompt={"Select your category *"}
            onValueChange={(value) => {
              setFormValues(prevValue => ({
                ...prevValue,
                category: value,
                category_id: cats_n_subcats.filter(cat => cat.value == value)[0].id,
              }))
            }}
            stateValue={formValues.category}
          />
        }
      </View>
      {formValues.category && 
        <View style={setMargin(20).setMarginBottom}>
          <DropdownComponent
            items={subcategories}
            prompt={"Select the sub category of your service *"}
            onValueChange={(value) => {
              setFormValues(prevValue => ({
                ...prevValue,
                sub_category: value,
                sub_category_id: subcategories.filter(cat => cat.value == value)[0].id,
              }))
            }}
            stateValue={formValues.sub_category}
          />
        </View>
      }
      <View style={setMargin(20).setMarginBottom}>
        <MultiSelect
          items={skills}
          setSelectedOptions={setSelectedSkills}
          selectedOptions={selectedSkills}
          placeholder={"Select your skills *"}
          searchPlaceholder={"Search for your skill"}
        />
      </View>
      <View style={setMargin(20).setMarginBottom}>
        <DropdownComponent
          items={experienceLevel}
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
      <View
        style={[
          setMargin(20).setMarginBottom
        ]}
      >
        <DropdownComponentLocation
          placeholderText="Where are you from? *"
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
          setMargin(30).setMarginBottom
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

      <View
        style={[
          {
            display: "flex",
            flexDirection: "row",
          },
          setMargin(20).setMarginBottom
        ]}
      >
        <View
          style={[
            customValue("width", "49%").setCustomValue,
            setMargin(5).setMarginRight
          ]}
        >
          <InputField
            info
            half
            placeholderText="Avg. Payment"
            onTextChange={(value) => {
              setFormValues(prevValue => ({
                ...prevValue,
                rate: value
              }))
            }}
            interactableIcon={faEuroSign}
            tooltipContent={"Average payment you wish to earn out of providing the service."}
          />
        </View>
        <View
          style={[
            customValue("width", "49%").setCustomValue,
          ]}
        >
          <DropdownComponent
            items={payType}
            prompt={"Select Pay type *"}
            onValueChange={(value) => {
              setFormValues(prevValue => ({
                ...prevValue,
                pay_type: value,
              }))
            }}
            stateValue={formValues.pay_type}
          />
        </View>
      </View>

      <CTAButton
        dark
        halfWidth
        title={submitting ? "Proceeding" : "Proceed"}
        isDisabled={submitting}
        customCSS={[
          setMargin(40).setMarginVertical,
          setMargin("auto").setMarginLeft,
          setMargin("auto").setMarginRight,
        ]}
        onPress={() => {
          setSubmitting(true);
          props.proceedToSummary(formValues)
          setSubmitting(false);
        }}
      />
    </ScrollView>
  );
}

export default ComponentTalentAccount;
