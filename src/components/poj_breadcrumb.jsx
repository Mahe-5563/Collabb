import { Image, View } from "react-native";
import React, { useState, useEffect } from "react";

import budgetActive from "../../assets/icons/budget-active.png";
import budgetInactive from "../../assets/icons/budget-inactive.png";
import jdActive from "../../assets/icons/jd-active.png";
import jdInactive from "../../assets/icons/jd-inactive.png";
import summaryActive from "../../assets/icons/summary-active.png";
import summaryInactive from "../../assets/icons/summary-inactive.png";
import { breadCrumbStyles } from "../css/interactables";

function PojBreadcrumb(props) {
  const { activeStep } = props;
  return (
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
  );
}

export default PojBreadcrumb;
