import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  TextInput,
} from "react-native";
import { searchFieldStyle } from "../css/interactables";
import { setMargin } from "../css/common";

function SearchField(props) {
  const { 
    onChangeText,
    value,
    onPress,
    dropdownOptions,
  } = props;

  const ddValues = dropdownOptions?.filter(item => item?.label?.toLowerCase().match(value?.toLowerCase()));

  return (
    <>
      <View
        style={[
          searchFieldStyle.textFieldContainer,
        ]}
      >
        {/* Search field container */}
        <FontAwesomeIcon 
          icon={faSearch}
          style={[
            searchFieldStyle.searchIcon,
            setMargin(10).setMarginRight
          ]}
          size={18}
        />
        <TextInput 
          placeholder="Search for a service"
          style={searchFieldStyle.searchText}
          onChangeText={onChangeText}
        />
      </View>
      {dropdownOptions?.length > 0 && value?.length >= 3 && 
        <ScrollView
          style={[
            searchFieldStyle.dropdownContainer
          ]}
        >
          {ddValues.length > 0 ? ddValues.map((item) => (
            <Pressable
              key={`dropdown_option_${item.id}`}
              onPress={() => onPress(item)}
            >
              <Text style={[ searchFieldStyle.dropdownText ]}>
                {item.label}
              </Text>
            </Pressable>
          )) :
            <Text style={[ searchFieldStyle.noResultsFound ]}>
              No Results Found
            </Text>
          }
        </ScrollView>
      }
    </>
  );
}

export default SearchField;
