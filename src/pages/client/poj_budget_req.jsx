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
import { paymentType } from "../../json/common";

function PojBudgetRequirements(props) {
  const { clientDetails } = props;
  const [formData, setFormData] = useState({
    budget_paytype: "",
    budget_minamt: "",
    budget_maxamt: "",
    budget_amount: "",
    budget_restraints: ""
  });

  const [formDataErrors, setFormDataErrors] = useState({
    budget_paytype: "",
    budget_minamt: "",
    budget_maxamt: "",
    budget_amount: "",
    budget_restraints: ""
  });

  const marginForFields = setMargin(10).setMarginVertical;
  const errorMessageStyle = [
    textStyles.errorMessage, 
    setMargin(10).setMarginLeft, 
    setMargin(5).setMarginTop
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
    
    if(!formData.budget_paytype) {
      handleInputValues("budget_paytype", formData.budget_paytype)
      canProceed = false
    };
    
    if((formData.budget_paytype.toLowerCase() == "per hour" && 
      (!formData.budget_minamt || !formData.budget_maxamt))) {
      
      canProceed = false;
      if(!formData.budget_minamt) handleInputValues("budget_minamt", formData.budget_minamt);
      else handleInputValues("budget_maxamt", formData.budget_maxamt);

    } else if (
      (formData.budget_paytype.toLowerCase() == "project" || formData.budget_paytype == "") 
      && !formData.budget_amount) {
      canProceed = false;
      handleInputValues("budget_amount", formData.budget_amount);
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
      <SecondaryNavbar 
        {...props} 
        title={`${clientDetails?.cateSubcateSelection?.subCategory?.value} - ${clientDetails?.cateSubcateSelection?.category?.value}`}
      />
      <ScrollView>
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          <PojBreadcrumb activeStep={2} stepTitle={"Budget Range"} />
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
              stateValue={formData.budget_paytype}
              onValueChange={(text) => {
                handleInputValues("budget_paytype", text)
              }}
            />
            {formDataErrors.budget_paytype &&
              <Text 
                style={errorMessageStyle}
              >
                {formDataErrors.budget_paytype}
              </Text>
            }
          </View>
          <View 
            style={[
              marginForFields,
              ...(formData.budget_paytype == "Per Hour" ? [{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }]: [])
            ]}
          >
            {formData.budget_paytype == "Per Hour" ?
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
                      handleInputValues("budget_minamt", text)
                    }}
                    fieldKey={"poj_budg_minamt"}
                    onBlur={(e) => {
                      const data = e.nativeEvent.text
                      handleOnEndEditing("budget_minamt", data)
                    }}
                    keyboardType="numeric"
                  />
                  {formDataErrors.budget_minamt &&
                    <Text 
                      style={errorMessageStyle}
                    >
                      {formDataErrors.budget_minamt}
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
                      handleInputValues("budget_maxamt", text);
                    }}
                    fieldKey={"poj_budg_maxamt"}
                    onBlur={(e) => {
                      const data = e.nativeEvent.text
                      handleOnEndEditing("budget_maxamt", data)
                    }}
                    keyboardType="numeric"
                  />
                  {formDataErrors.budget_maxamt &&
                    <Text 
                      style={errorMessageStyle}
                    >
                      {formDataErrors.budget_maxamt}
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
                    handleInputValues("budget_amount", text);
                  }}
                  fieldKey={"poj_budg_amount"}
                  onBlur={(e) => {
                    const data = e.nativeEvent.text
                    handleOnEndEditing("budget_amount", data)
                  }}
                  keyboardType="numeric"
                />
                {formDataErrors.budget_amount &&
                  <Text 
                    style={errorMessageStyle}
                  >
                    {formDataErrors.budget_amount}
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
                handleInputValues("budget_restraints", text);
              }}
              fieldKey={"poj_budget_restraints"}
            />
            {formDataErrors.budget_restraints &&
              <Text 
                style={errorMessageStyle}
              >
                {formDataErrors.budget_restraints}
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
