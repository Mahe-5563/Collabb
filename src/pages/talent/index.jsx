import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, View, Text, Pressable, } from "react-native";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import NavbarHomepage from "../../components/navbar_homepage";
import FixedBottomNav from "../../components/fixedbottom_nav";
import { setMargin, setPadding, textSubheaders } from "../../css/common";
import TalJobCard from "../../components/page_components/job_card_tal_home";
import TalentFilterModal from "../../components/page_components/talent_filter_modal";

function TalentIndex(props) {
  const { navigation } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [filterData, setFilterData] = useState({
    paymentType: {},
    amount: "",
    startDate: "",
  });

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

  const resetFilterData = () => {
    setFilterData(filterData);
  }

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
            onPress={() => setShowModal(true)}
          >
            <FontAwesomeIcon 
              icon={faFilter}
              size={24}
            />
          </Pressable>
        </View>
        {jobList.map(job => (
          <Pressable
            id={`job_id_${job.id}`}
            key={`job_id_${job.id}`}
            style={[ 
              setMargin(20).setMarginBottom,
              setMargin(5).setMarginHorizontal,
            ]}
            onPress={() => {
              // console.info("Job: ", job);
              navigation.navigate(
                "talent_apply_job_page",
                {
                  jobDetails: job,
                }
              )
            }}
          >
            <TalJobCard
              {...job}
            />
          </Pressable>
        ))}
      </ScrollView>
      <TalentFilterModal
        showModal={showModal}
        setShowModal={setShowModal}
        filterData={filterData}
        setFilterData={setFilterData}
        resetFilterData={resetFilterData}
      />
      <FixedBottomNav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default TalentIndex;