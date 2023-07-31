// Built-in imports
import React, { useState, useEffect } from "react";
import { Modal, View, Pressable, Text } from "react-native";
import { faEuro, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// User defined imports
import { multiSelectStyles, popupModal, talentApplyStyles } from "../../css/interactables";
import { colors } from "../../css/colors";
import DropdownComponent from "../dropdown";
import MultiSelect from "../multiselect";
import { paymentType } from "../../json/common";
import { setMargin } from "../../css/common";
import OverlayDropdown from "../overlay_dropdown";
import InputField from "../input_field";
import DatePicker from "../date_picker";
import CTAButton from "../cta_button";
import { text } from "@fortawesome/fontawesome-svg-core";

function TalentFilterModal(props) {
  const { 
    showModal, 
    setShowModal,
    filterData, 
    setFilterData,
    resetFilterData,
  } = props;
  
  const [tempFilterData, setTempFilterData] = useState(filterData);

  useEffect(() => {
    console.info("tempFilterData: ", tempFilterData);
  }, [tempFilterData])
  

  return (
    <Modal
      transparent
      animationType="slide"
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false);
        resetFilterData();
      }}
    >
      <View style={[popupModal.modalView]}>
        <View style={[popupModal.modalBody]}>
          <Pressable
            onPress={() => {
              setShowModal(false);
              resetFilterData();
            }}
            style={multiSelectStyles.closeIcon}
          >
            <FontAwesomeIcon 
              icon={faTimes}
              size={22}
              color={colors.white}
            />
          </Pressable>
          <View>
            <Text style={popupModal.subcategoryTitle}>
              {"Filter"}
            </Text>
            <View 
              style={[
                setMargin(20).setMarginTop
              ]}
            >
              <OverlayDropdown
                items={paymentType}
                placeholderText={"Select Payment Type"}
                selectedOption={tempFilterData.paymentType}
                setSelectedOption={(selItem) => {
                  setTempFilterData(prevStat => ({
                    ...prevStat,
                    paymentType: selItem,
                    amount: '',
                  }));
                }}
              />
            </View>
            <View
              style={[
                setMargin(10).setMarginTop,
              ]}
            >
              {tempFilterData.paymentType.id == "per_hour" ?
                <View 
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View 
                    style={[
                      {
                        width: '48%',
                      }
                    ]}
                  >
                    <InputField
                      placeholderText={"Min. Amt."}
                      onTextChange={(text) => {
                        setTempFilterData(prevState => ({
                          ...prevState,
                          amount: { min: text, max: (prevState?.amount?.max || 0) },
                        }))
                      }}
                      fieldKey={"min_amt"}
                      interactableIcon={faEuro}
                      value={filterData.amount.min}
                    />
                  </View>
                  <View 
                    style={[
                      {
                        width: '48%',
                      }
                    ]}
                  >
                    <InputField
                      placeholderText={"Max. Amt."}
                      onTextChange={(text) => {
                        setTempFilterData(prevState => ({
                          ...prevState,
                          amount: { min: (prevState?.amount?.min || tempFilterData.min || 0), max: text },
                        }))
                      }}
                      fieldKey={"max_amt"}
                      interactableIcon={faEuro}
                      value={filterData.amount.max}
                    />
                  </View>
                </View>
                : 
                <View>
                  <InputField
                    placeholderText={"Amount"}
                    onTextChange={(text) => {
                      setTempFilterData(prevState => ({
                        ...prevState,
                        amount: text,
                      }))
                    }}
                    fieldKey={"amount"}
                    interactableIcon={faEuro}
                    value={filterData.amount}
                  />
                </View>
              }
            </View>
            <View 
              style={[
                setMargin(20).setMarginTop,
              ]}
            >
              <DatePicker 
                label={"Estimated Start Date"}
                onChange={(date) => { 
                  console.info(date) 
                  setTempFilterData(prevState => ({
                    ...prevState,
                    startDate: date,
                  }))
                }}
                date={tempFilterData.startDate}
              />
            </View>
          </View>
          <View
            style={[
              setMargin(30).setMarginTop,
              {
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }
            ]}
          >
            <CTAButton
              title={"Apply"}
              onPress={() => { 
                setFilterData(tempFilterData);
                setShowModal(false);
                console.info("Saved!");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TalentFilterModal;