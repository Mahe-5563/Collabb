import React, { useState } from "react";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView, Text, Pressable } from "react-native";
import { buttons } from "../css/interactables";
import { marginBottom, marginRight, marginTop } from "../css/common";

function AttachButton() {
    
  return (
    <SafeAreaView>
        <Pressable
          style={buttons.attachButtonComponent}
        >
            <FontAwesomeIcon 
                icon={faPaperclip}
                size={18}
                style={[
                  marginTop("auto").setMarginTop,
                  marginBottom("auto").setMarginBottom,
                  marginRight(10).setMarginRight,
                ]}
            />
            <Text
              style={buttons.attachButtonText}
            >
              attach
            </Text>
        </Pressable>
    </SafeAreaView>
  );
}

export default AttachButton;
