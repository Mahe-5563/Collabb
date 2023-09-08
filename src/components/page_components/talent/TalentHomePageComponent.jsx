import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, SafeAreaView, View, Text, Pressable } from "react-native";

import TalJobCard from "../job_card_tal_home";
// import NavbarHomepage from "../../navbar_homepage";
import TalentFilterModal from "../talent_filter_modal";
import { apiGetUserProfile } from "../../../api/users";
import { apiGetJobPostsOnCategory } from "../../../api/job_post";
import { setMargin, setPadding, textSubheaders } from "../../../css/common";
import {
  setCurrentUserProfile,
  setCurrentUserProfileDetails,
} from "../../../../redux/actions/user";

function TalentHomePageComp(props) {
  const { navigation } = props;
  const [showModal, setShowModal] = useState(false);
  const [filterData, setFilterData] = useState({
    paymentType: {},
    amount: "",
    startDate: "",
  });
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    // Get User profile details...
    if (props.currentUser._id) {
      apiGetUserProfile(props.currentUser._id, "talent", (result) => {
        const talDetails = result.res.talentDetails;
        props.setCurrentUserProfileDetails(talDetails);

        apiGetJobPostsOnCategory(talDetails?.category, (result) => {
          // console.info(result.res)
          setJobList(result.res);
        });
      });
    }
    // Get possible talent job posts...
  }, []);

  const resetFilterData = () => {
    setFilterData(filterData);
  };

  return (
    <>
      {/* <SafeAreaView>
        <NavbarHomepage 
          {...props}
        />
      </SafeAreaView> */}
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
            justifyContent: "space-between",
          },
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
          <FontAwesomeIcon icon={faFilter} size={24} />
        </Pressable>
      </View>
      {jobList.map((job) => {
        // console.info("job: ", job);
        return (
          <Pressable
            id={`job_id_${job._id}`}
            key={`job_id_${job._id}`}
            style={[
              setMargin(20).setMarginBottom,
              setMargin(5).setMarginHorizontal,
            ]}
            onPress={() => {
              // console.info("Job: ", job);
              navigation.navigate("talent_apply_job_page", {
                jobDetails: job,
              });
            }}
          >
            <TalJobCard {...job} />
          </Pressable>
        );
      })}
      </ScrollView>
      <TalentFilterModal
        showModal={showModal}
        setShowModal={setShowModal}
        filterData={filterData}
        setFilterData={setFilterData}
        resetFilterData={resetFilterData}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state.userDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUserDetails: (currentUser) =>
      dispatch(setCurrentUserProfile(currentUser)),
    setCurrentUserProfileDetails: (currentUser) =>
      dispatch(setCurrentUserProfileDetails(currentUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TalentHomePageComp);
