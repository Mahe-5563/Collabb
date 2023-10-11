import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { dashboardStyles } from "../../../css/interactables";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { marginCenter, setMargin } from "../../../css/common";

function DashboardCard(props) {
  const { 
		navigation,
		icon,
		title,
		onPress,
	} = props;

  return (
    <>
      <Pressable 
				style={dashboardStyles.cardStyle}
				onPress={onPress}
			>
        <FontAwesomeIcon icon={icon} size={100} style={[marginCenter]} />

        <Text style={dashboardStyles.dashboardTitle}>{title}</Text>
      </Pressable>
    </>
  );
}

export default DashboardCard;
