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
  const { clientDetails } = props;
  // State to store form data.
  const [formData, setFormData] = useState({
    jd_jobtitle: "",
    jd_startdate: "",
    jd_enddate: "",
    jd_experience: "",
    jd_skills: "",
    jd_description: "",
  });

  // State to handle form data errors
  const [formErrors, setFormErrors] = useState({
    jd_jobtitle: "",
    jd_startdate: "",
    jd_enddate: "",
    jd_experience: "",
    jd_skills: "",
    jd_description: "",
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

  // JSON data for jd_experience and skills.
  const jd_experience = [
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
      handleInputValues("jd_skills", selectedSkills)
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
        ...clientDetails.postJobDetails,
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
      <SecondaryNavbar 
        {...props}
        title={`${clientDetails?.cateSubcateSelection?.subCategory?.value} - ${clientDetails?.cateSubcateSelection?.category?.value}`}
      />
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
                handleInputValues("jd_jobtitle", text);
              }}
              fieldKey={"poj_title_job"}
              onBlur={(e) => {
                const data = e.nativeEvent.text
                handleOnEndEditing("jd_jobtitle", data)
              }}
            />
            {formErrors.jd_jobtitle &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.jd_jobtitle}
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
                date={formData.jd_startdate}
                onChange={(date) => {
                  handleInputValues("jd_startdate", date)
                }}
              />
              {formErrors.jd_startdate &&
                <Text 
                  style={errorMessageStyle}
                >
                  {formErrors.jd_startdate}
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
                date={formData.jd_enddate}
                onChange={(date) => {
                  handleInputValues("jd_enddate", date)
                }}
                {...(formData.jd_startdate && { minDate: formData.jd_startdate })}
              />
              {formErrors.jd_enddate &&
                <Text 
                  style={errorMessageStyle}
                >
                  {formErrors.jd_enddate}
                </Text>
              }
            </View>
          </View>
          <View style={[marginForFields]}>
            <DropdownComponent
              prompt={"Select necessary experience*"}
              items={jd_experience}
              stateValue={formData.jd_experience}
              onValueChange={(text) => {
                handleInputValues("jd_experience", text)
              }}
            />
            {formErrors.jd_experience &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.jd_experience}
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
            {formErrors.jd_skills &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.jd_skills}
              </Text>
            }
          </View>
          <View style={[marginForFields]}>
            <InputField
              isMultiLine
              placeholderText={"Give a short description about your project *"}
              onTextChange={(text) => {
                handleInputValues("jd_description", text)
              }}
              fieldKey={"poj_project_description"}
              onBlur={(e) => {
                const data = e.nativeEvent.text
                handleOnEndEditing("jd_description", data)
              }}
            />
            {formErrors.jd_description &&
              <Text 
                style={errorMessageStyle}
              >
                {formErrors.jd_description}
              </Text>
            }
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
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
