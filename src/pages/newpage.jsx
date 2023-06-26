import React from "react";
import { SafeAreaView, Text } from "react-native";

import Navbar from "../components/navbar";
import CTAButton from "../components/cta_button";
import ImgButton from "../components/img_button";
import InputField from "../components/input_field";
import MultiSelect from "../components/multiselect";
import ButtonImg from "../../assets/images/btnImg.png";
import DropdownComponent from "../components/dropdown";
import AttachButton from "../components/attach_button";
import ToggleButtons from "../components/toggle_button";
import { orSplit } from "../css/common";

function NewPage(props) {

    // State variables for multi select...
    // const [selectedOptions, setSelectedOptions] = useState([]);

    /* useEffect(() => {
      // console.info("selectedOptions => ", selectedOptions)
    }, [selectedOptions]) */
  
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
    return (
      <SafeAreaView>
        <Navbar {...props} />
        <InputField
          // isMultiLine
          placeholderText="Placeholder text"
          type=""
          interactableIcon={false}
        />

        <DropdownComponent
          items={options}
          prompt={"Select a Value"}
        />
        
        <MultiSelect
          items={options}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />

        <CTAButton
          // isDisabled
          // dark
          // halfWidth
          title={"CTA title"}
          onPress={() => { console.info("CTA Button clicked!") }}
          // icon={faSave}
        />

        <ImgButton
          bgImg={ButtonImg}
          title={"Button Title"}
          onPress={() => { console.info("Image Button clicked!") }}
        />

        <ToggleButtons/>

        <AttachButton />

        <View style={orSplit.splitter}>
          <View style={orSplit.splitLine} />
          <Text style={orSplit.orText}> OR </Text>
          <View style={orSplit.splitLine} />
        </View>
      </SafeAreaView>
    );
}

export default NewPage;