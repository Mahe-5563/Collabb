import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { fixedBottomNavbar } from "../css/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { appFontFamily, setMargin, textLabel, textSmall } from "../css/common";
import { colors } from "../css/colors";

function FixedBottomNav(props) {
  const { 
    setCurrentPage,
    currentPage,
    menuItems
  } = props;

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
