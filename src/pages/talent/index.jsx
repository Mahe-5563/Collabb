import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, View, Text, Pressable, } from "react-native";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import NavbarHomepage from "../../components/navbar_homepage";
import FixedBottomNav from "../../components/fixedbottom_nav";
import { setMargin, setPadding, textSubheaders } from "../../css/common";
import TalJobCard from "../../components/page_components/job_card_tal_home";

function TalentIndex(props) {
  const { navigation } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const jobList = [
    {
      id: "1",
      title: "Title 1",
      date: "07/07/1997",
    },
    {
      id: "2",
      title: "Title 2",
      date: "07/07/1997",
    },
    {
      id: "3",
      title: "Title 3",
      date: "07/07/1997",
    },
    {
      id: "4",
      title: "Title 4",
      date: "07/07/1997",
    },
    {
      id: "5",
      title: "Title 5",
      date: "07/07/1997",
    }
  ]

  return (
    <>
      <SafeAreaView>
        <NavbarHomepage 
          {...props}
        />
      </SafeAreaView>
      <ScrollView style={[
        setPadding(20).setPaddingHorizontal,
        setMargin(20).setMarginBottom
      ]}>
        <View
          style={[
            setPadding(20).setPaddingVertical,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }
          ]}
        >
          <Text
            style={{
              fontSize: textSubheaders,
              width: "80%",
            }}
          >
            {"Find out what interests you today"}
          </Text>
          <Pressable
            style={setPadding(20).setPadding}
            onPress={() => console.info("Filter open")}
          >
            <FontAwesomeIcon 
              icon={faFilter}
              size={24}
            />
          </Pressable>
        </View>
        {jobList.map(job => (
          <View
            id={job.id}
            style={[ setMargin(10).setMarginBottom ]}
          >
            <TalJobCard
              {...job}
            />
          </View>
        ))}
      </ScrollView>
      <FixedBottomNav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default TalentIndex;