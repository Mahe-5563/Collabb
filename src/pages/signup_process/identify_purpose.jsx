// Built-in
import * as React from "react";
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text 
} from "react-native";
import { connect } from "react-redux";

// User components
import { appFontFamily, customValue, fontFamily, fontSize, setMargin, textHeaders } from "../../css/common";
import ImgButton from "../../components/img_button";
import SecondaryNavbar from "../../components/navbar_sec";
import ButtonImg from "../../../assets/images/btnImg.png";

function IdentifyPurpose(props) {
  return (
    <SafeAreaView>
      <ScrollView 
        automaticallyAdjustKeyboardInsets={true}
        // onScroll={}
      >
        <SecondaryNavbar {...props} />

        <View
          style={[
            setMargin("20%").setMarginTop,
          ]}
        >
          <Text
            style={[
              fontSize(textHeaders).setFontSize,
              customValue("textAlign", "center").setCustomValue,
              fontFamily(appFontFamily).setFontFamily,
              setMargin(40).setMarginBottom,
            ]}
          >
            How would you identify your purpose
          </Text>

          <ImgButton
            bgImg={ButtonImg}
            title={"Post Jobs"}
            onPress={() => { 
              // console.info("Post Jobs clicked!");
              props.navigation.navigate("account_creation", {
                back_key: props.route.key,
                type: "client"
              });
            }}
            customCSS={[
              setMargin("2%").setMarginBottom,
            ]}
          />
          <ImgButton
            bgImg={ButtonImg}
            title={"Provide a Service"}
            onPress={() => { 
              // console.info("Provide a service clicked!");
              props.navigation.navigate("account_creation", {
                back_key: props.route.key,
                type: "talent"
              });
            }}
            // customCSS={[]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default IdentifyPurpose;