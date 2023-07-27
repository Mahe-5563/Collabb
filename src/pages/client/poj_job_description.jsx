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
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setMargin } from "../../css/common";
import CTAButton from "../../components/cta_button";
import { textStyles } from "../../css/interactables";
import DatePicker from "../../components/date_picker";
import InputField from "../../components/input_field";
import MultiSelect from "../../components/multiselect";
import DropdownComponent from "../../components/dropdown";
import SecondaryNavbar from "../../components/navbar_sec";
import PojBreadcrumb from "../../components/poj_breadcrumb";
import { setPostJobDetails } from "../../../redux/actions/client";

function PojJobDescription(props) {
  // State to store form data.
  const [formData, setFormData] = useState({
    jobTitle: "",
    startDate: "",
    endDate: "",
    experience: "",
    skills: "",
    description: "",
  });

  // State to handle form data errors
  const [formErrors, setFormErrors] = useState({
    jobTitle: "",
    startDate: "",
    endDate: "",
    experience: "",
    skills: "",
    description: "",
  })

  // State to handle the array of skills.
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  // Common styles
  const marginForFields = setMargin(10).setMarginVertical;
  const errorMessageStyle = [
    textStyles.errorMessage, 
    setMargin(10).setMarginLeft, 
    setMargin(5).setMarginTop
  ];

  // JSON data for experience and skills.
  const experience = [
    { id: 1, label: "Beginner", value: "Beginner" },
    { id: 2, label: "Intermediate", value: "Intermediate" },
    { id: 3, label: "Expert", value: "Expert" },
  ];
  const skills = [
    { id: 1, label: "Option 1", value: "Option 1" },
    { id: 2, label: "Option 2", value: "Option 2" },
  ];

  useEffect(() => {
    if (selectedSkills) {
      handleInputValues("skills", selectedSkills)
    }
  }, [selectedSkills]);

  const handleInputValues = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    
    handleOnEndEditing(key, value);
  }

  const handleOnEndEditing = (key, value) => {
    if(value) {
      setFormErrors(prevState => ({
        ...prevState,
        [key]: "",
      }))
    } else {
      setFormErrors(prevState => ({
        ...prevState,
        [key]: "Mandatory field",
      }))
    }
  }

  const proceedToBudget = () => {

    let canProceed = true;
    console.info("formData: ", formData);
    console.info("formErrors: ", formErrors);
    const formDataKeys = Object.keys(formData);
    for(let i = 0; i<formDataKeys.length; i++) {
      handleOnEndEditing(formDataKeys[i], formData[formDataKeys[i]]);
      if(!formData[formDataKeys[i]]) {
        canProceed = false;
      }
    }
    
    if(canProceed) {
      props.setPostJobDetails({
        ...props.clientDetails.postJobDetails,
        jobDescription: formData,
      })
      props.navigation.navigate(
        "poj_budget_requirements",
        { job_desc: props.route.key }
      );
    }
  }

  return (
    <>
      <SecondaryNavbar {...props} />
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          <PojBreadcrumb activeStep={1} stepTitle={"Job Description"} />
        </View>
        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <View style={[marginForFields]}>
            <InputField
              {...props}
              placeholderText={"Title of the Job *"}
              onTextChange={(text) => {
                handleInputValues("jobTitle", text);
              }}
              fieldKey={"poj_title_job"}
              onBlur={(e) => {
                const data = e.nativeEvent.text
                handleOnEndEditing("jobTitle", data)
              }}
            />
            {formErrors.jobTitle &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.jobTitle}
              </Text>
            }
          </View>
          <View
            style={[
              marginForFields,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <View
              style={{
                width: "48%"
              }}
            >
              <DatePicker
                // half
                label={"Start Date"}
                date={formData.startDate}
                onChange={(date) => {
                  handleInputValues("startDate", date)
                }}
              />
              {formErrors.startDate &&
                <Text 
                  style={errorMessageStyle}
                >
                  {formErrors.startDate}
                </Text>
              }
            </View>
            <View
              style={{
                width: "48%"
              }}
            >
              <DatePicker
                // half
                label={"End Date (ETA)"}
                date={formData.endDate}
                onChange={(date) => {
                  handleInputValues("endDate", date)
                }}
                {...(formData.startDate && { minDate: formData.startDate })}
              />
              {formErrors.endDate &&
                <Text 
                  style={errorMessageStyle}
                >
                  {formErrors.endDate}
                </Text>
              }
            </View>
          </View>
          <View style={[marginForFields]}>
            <DropdownComponent
              prompt={"Select necessary experience*"}
              items={experience}
              stateValue={formData.experience}
              onValueChange={(text) => {
                handleInputValues("experience", text)
              }}
            />
            {formErrors.experience &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.experience}
              </Text>
            }
          </View>
          <View style={[marginForFields]}>
            <MultiSelect
              items={skills}
              setSelectedOptions={setSelectedSkills}
              selectedOptions={selectedSkills}
              placeholder={"Select Required Skills*"}
              searchPlaceholder={"Search for a skill"}
            />
            {formErrors.skills &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.skills}
              </Text>
            }
          </View>
          <View style={[marginForFields]}>
            <InputField
              isMultiLine
              placeholderText={"Give a short description about your project *"}
              onTextChange={(text) => {
                handleInputValues("description", text)
              }}
              fieldKey={"poj_project_description"}
              onBlur={(e) => {
                const data = e.nativeEvent.text
                handleOnEndEditing("description", data)
              }}
            />
            {formErrors.description &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.description}
              </Text>
            }
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <CTAButton
            dark
            halfWidth
            title={"Proceed"}
            onPress={proceedToBudget}
          />
        </View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPostJobDetails: (projectDetails) => dispatch(setPostJobDetails(projectDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PojJobDescription);
