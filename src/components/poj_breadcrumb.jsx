import { Image, View, Text } from "react-native";
import React, { useState, useEffect } from "react";

import budgetActive from "../../assets/icons/budget-active.png";
import budgetInactive from "../../assets/icons/budget-inactive.png";
import jdActive from "../../assets/icons/jd-active.png";
import jdInactive from "../../assets/icons/jd-inactive.png";
import summaryActive from "../../assets/icons/summary-active.png";
import summaryInactive from "../../assets/icons/summary-inactive.png";
import { breadCrumbStyles } from "../css/interactables";

function PojBreadcrumb(props) {
  const { activeStep, stepTitle } = props;
  return (
    <>
      <View
        style={breadCrumbStyles.poj_breadcrumb_container}
      >
        <Image 
          source={activeStep == 1 ? jdActive : jdInactive}
          style={breadCrumbStyles.poj_breadcrumb_img}
        />
        <View style={breadCrumbStyles.poj_breadcrumb_sep} />
        <Image 
          source={activeStep == 2 ? budgetActive : budgetInactive}
          style={breadCrumbStyles.poj_breadcrumb_img}
        />
        <View style={breadCrumbStyles.poj_breadcrumb_sep} />
        <Image 
          source={activeStep == 3 ? summaryActive : summaryInactive}
          style={breadCrumbStyles.poj_breadcrumb_img}
        />
      </View>

      <Text
        style={breadCrumbStyles.poj_breadcrumb_title}
      >
        {stepTitle}
      </Text>
    </>
  );
}

export default PojBreadcrumb;
