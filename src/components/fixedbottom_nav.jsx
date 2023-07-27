import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { fixedBottomNavbar } from "../css/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChartColumn, faCircleUser, faHouse, faMessage } from "@fortawesome/free-solid-svg-icons";
import { appFontFamily, setMargin, textLabel, textSmall } from "../css/common";
import { colors } from "../css/colors";

function FixedBottomNav(props) {
  const { 
    setCurrentPage,
    currentPage
  } = props;

  const menuItems = [
    {
      id: 1,
      title: "HOME",
      icon: faHouse,
    },
    {
      id: 2,
      title: "DASHBOARD",
      icon: faChartColumn,
    },
    {
      id: 3,
      title: "MESSAGE",
      icon: faMessage,
    },
    {
      id: 4,
      title: "ACCOUNT",
      icon: faCircleUser,
    }
  ];

  return (
    <View
      style={fixedBottomNavbar.container}
    >
      {menuItems.map(item => (
        <Pressable
          key={`menu_item_${item.title}`}
          style={[
            fixedBottomNavbar.menuItem,
            ...(item.id == currentPage ? [ fixedBottomNavbar.activeItem ] : []),
          ]}
          onPress={() => {
            console.info(`${item.title} pressed!`);
            setCurrentPage(item.id);
          }}
        >
          <FontAwesomeIcon 
            icon={item.icon}
            size={20}
            style={[
              setMargin("auto").setMarginLeft,
              setMargin("auto").setMarginRight,
              setMargin(8).setMarginBottom,
            ]}
            color={currentPage == item.id ? colors.primary_color : colors.secondary_color}
          />
          <Text style={{ 
            fontFamily: appFontFamily,
            textAlign: "center",
            fontSize: textSmall,
            color: currentPage == item.id ? colors.primary_color : colors.secondary_color,
          }}>
            {item.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export default FixedBottomNav;
