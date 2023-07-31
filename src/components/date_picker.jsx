import React, { useState } from "react";
import { SafeAreaView, Text, Pressable } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { inputStyles } from "../css/interactables";
import { appFontFamilyBold, setPadding, textSize } from "../css/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { colors } from "../css/colors";

function DatePicker(props) {
  const { 
    label, // Mandatory 
    half, 
    onChange, // Mandatory
    date, // Mandatory
    minDate
  } = props;
  const [show, setShow] = useState(false);

  const getSelectedDate = (date) => {
    const fullDate = new Date(date);
    if(!isNaN(fullDate)) {
      const dat = fullDate.getDate();
      const month = fullDate.getMonth()+1;
      const year = fullDate.getFullYear();
      return `${((fullDate.getDate()) < 10 ? "0" : "") + dat}/${((fullDate.getMonth() + 1) < 10 ? "0" : "") + month}/${year}`;
    } else {
      return "";
    }
  }

  return (
    <SafeAreaView
      style={half ? { width: "48%" } : {}}
    >
      <Text
        style={{
          fontSize: textSize,
          fontFamily: appFontFamilyBold,
          marginBottom: 5,
        }}
      >
        {label}
      </Text>
      <Pressable
        onPress={() => setShow(true)}
        style={[
          inputStyles.inputView,
          setPadding(16).setPaddingVertical,
        ]}
      >
        <FontAwesomeIcon 
          icon={faCalendar}
          size={18}
          style={{
            marginRight: 15,
          }}
        />
        <Text 
          style={[
            inputStyles.inputField,
            ...(!getSelectedDate(date) ? [{ color: colors.grey_color }] : [])
          ]}
        >
          {getSelectedDate(date) || "DD/MM/YYYY"}
        </Text>
      </Pressable>
      {show && 
        <RNDateTimePicker
          mode="date"
          display="calendar"
          value={date || new Date()}
          {...minDate && { minimumDate: minDate }}
          onChange={(date) => {
            const fullDate = new Date(date.nativeEvent.timestamp);
            onChange(fullDate);
            setShow(false);
          }}
        />
      }
    </SafeAreaView>
  );
}

export default DatePicker;