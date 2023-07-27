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

import SecondaryNavbar from "../../components/navbar_sec";
import PojBreadcrumb from "../../components/poj_breadcrumb";
import InputField from "../../components/input_field";
import DropdownComponent from "../../components/dropdown";
import { setMargin } from "../../css/common";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import CTAButton from "../../components/cta_button";
import { setPostJobDetails } from "../../../redux/actions/client";
import { textStyles } from "../../css/interactables";

function PojBudgetRequirements(props) {
  const [formData, setFormData] = useState({
    paymentType: "",
    minAmt: "",
    maxAmt: "",
    amount: "",
    restraints: ""
  });

  const [formDataErrors, setFormDataErrors] = useState({
    paymentType: "",
    minAmt: "",
    maxAmt: "",
    amount: "",
    restraints: ""
  });

  const marginForFields = setMargin(10).setMarginVertical;
  const errorMessageStyle = [
    textStyles.errorMessage, 
    setMargin(10).setMarginLeft, 
    setMargin(5).setMarginTop
  ];
  
  const paymentType = [
    { id: "1", label: "Project", value: "Project", },
    { id: "2", label: "Per Hour", value: "Per Hour", },
  ];

  const handleInputValues = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    
    handleOnEndEditing(key, value);
  }

  const handleOnEndEditing = (key, value) => {
    if(value) {
      setFormDataErrors(prevState => ({
        ...prevState,
        [key]: "",
      }))
    } else {
      setFormDataErrors(prevState => ({
        ...prevState,
        [key]: "Mandatory field",
      }))
    }
  }

  const proceedToBudget = () => {

    let canProceed = true;
    console.info("formData: ", formData);
    
    if(!formData.paymentType) {
      handleInputValues("paymentType", formData.paymentType)
      canProceed = false
    };
    
    if((formData.paymentType.toLowerCase() == "per hour" && 
      (!formData.minAmt || !formData.maxAmt))) {
      
      canProceed = false;
      if(!formData.minAmt) handleInputValues("minAmt", formData.minAmt);
      else handleInputValues("maxAmt", formData.maxAmt);

    } else if (
      (formData.paymentType.toLowerCase() == "project" || formData.paymentType == "") 
      && !formData.amount) {
      canProceed = false;
      handleInputValues("amount", formData.amount);
    }

    if(canProceed) {
      props.setPostJobDetails({
        ...props.clientDetails.postJobDetails,
        budgetReq: formData,
      })
      props.navigation.navigate(
        "poj_summary",
        { 
          budget_req: props.route.key,
          job_desc: props.route?.params?.job_desc,
        }
      )
    }
  }

  return (
    <>
      <SecondaryNavbar {...props} />
      <ScrollView>
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          <PojBreadcrumb activeStep={2} stepTitle={"Budget Requirement"} />
        </View>
        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <View style={[marginForFields]}>
            <DropdownComponent 
              prompt={"Payment Type*"}
              items={paymentType}
              stateValue={formData.paymentType}
              onValueChange={(text) => {
                handleInputValues("paymentType", text)
              }}
            />
            {formDataErrors.paymentType &&
              <Text 
                style={errorMessageStyle}
              >
                {formDataErrors.paymentType}
              </Text>
            }
          </View>
          <View 
            style={[
              marginForFields,
              ...(formData.paymentType == "Per Hour" ? [{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }]: [])
            ]}
          >
            {formData.paymentType == "Per Hour" ?
              <>
                <View
                  style={{
                    width: "49%"
                  }}
                >
                  <InputField
                    {...props}
                    interactableIcon={faEuroSign}
                    placeholderText={"Min Amt.*"}
                    onTextChange={(text) => {
                      handleInputValues("minAmt", text)
                    }}
                    fieldKey={"poj_budg_minamt"}
                    onBlur={(e) => {
                      const data = e.nativeEvent.text
                      handleOnEndEditing("minAmt", data)
                    }}
                  />
                  {formDataErrors.minAmt &&
                    <Text 
                      style={errorMessageStyle}
                    >
                      {formDataErrors.minAmt}
                    </Text>
                  }
                </View>
                <View
                  style={{
                    width: "49%"
                  }}
                >
                  <InputField
                    {...props}
                    interactableIcon={faEuroSign}
                    placeholderText={"Max Amt.*"}
                    onTextChange={(text) => {
                      handleInputValues("maxAmt", text);
                    }}
                    fieldKey={"poj_budg_maxamt"}
                    onBlur={(e) => {
                      const data = e.nativeEvent.text
                      handleOnEndEditing("maxAmt", data)
                    }}
                  />
                  {formDataErrors.maxAmt &&
                    <Text 
                      style={errorMessageStyle}
                    >
                      {formDataErrors.maxAmt}
                    </Text>
                  }
                </View>
              </>
              : 
              <>
                <InputField
                  {...props}
                  interactableIcon={faEuroSign}
                  placeholderText={"Project Amount*"}
                  onTextChange={(text) => {
                    handleInputValues("amount", text);
                  }}
                  fieldKey={"poj_budg_amount"}
                  onBlur={(e) => {
                    const data = e.nativeEvent.text
                    handleOnEndEditing("amount", data)
                  }}
                />
                {formDataErrors.amount &&
                  <Text 
                    style={errorMessageStyle}
                  >
                    {formDataErrors.amount}
                  </Text>
                }
              </>
            }
          </View>
          <View style={[marginForFields]}>
            <InputField
              isMultiLine
              placeholderText={"Do you have any restraints on the budget for your project?"}
              onTextChange={(text) => {
                handleInputValues("restraints", text);
              }}
              fieldKey={"poj_budget_restraints"}
            />
            {formDataErrors.restraints &&
              <Text 
                style={errorMessageStyle}
              >
                {formDataErrors.restraints}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PojBudgetRequirements);
