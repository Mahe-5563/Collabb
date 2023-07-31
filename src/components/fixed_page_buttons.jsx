import React, { useState, useEffect } from "react";
import { View } from "react-native";

import Navbar from "../../components/navbar";
import SecondaryNavbar from "../../components/navbar_sec";

function FixedPageButtons(props) {
  const { navigation } = props;
  console.info("Props: ", props.route.params);
  
  return (
    <View>
      
    </View>
  );
}

export default FixedPageButtons;