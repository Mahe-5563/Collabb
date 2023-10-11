import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, SafeAreaView, View, Text, Pressable, ActivityIndicator, RefreshControl } from "react-native";

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
import { colors } from "../../../css/colors";

function TalentHomePageComp(props) {
  const { navigation } = props;
  const [showModal, setShowModal] = useState(false);
  const [filterData, setFilterData] = useState({
    paymentType: {},
    amount: "",
    // startDate: "",
    duration: "",
  });
  const [jobList, setJobList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Get User profile details...
    if (props?.currentUser?._id) {
      apiGetUserProfile(props.currentUser._id, "talent", (result) => {
        setLoader(true);
        const talDetails = result?.res?.talentDetails;
        getJobPosts(talDetails?.category)
        props.setCurrentUserProfileDetails(talDetails);
      });
    }
    // Get possible talent job posts...
  }, [props?.currentUser]);

  const resetFilterData = () => {
    setFilterData(filterData);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setLoader(true);
    setJobList([]);
    getJobPosts(props.userProfile.category);
  }

  const getJobPosts = (category) => {
    apiGetJobPostsOnCategory(category, (result) => {
      // const jobs = result.fullObj;
      setJobList(result.fullObj.sort((a, b) => (+new Date(b.jobDetail.createdAt)) - (+new Date(a.jobDetail.createdAt))));
      setRefreshing(false);
      setLoader(false);
    });
  }

  return (
    <>
      {/* <SafeAreaView>
        <NavbarHomepage 
          {...props}
        />
      </SafeAreaView> */}
      <ScrollView
        style={[
          setPadding(20).setPaddingHorizontal,
          setMargin(20).setMarginBottom,
        ]}
        refreshControl={
          <RefreshControl 
            onRefresh={onRefresh} 
            refreshing={refreshing}
          />
        }
      >
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
        {loader && 
          <ActivityIndicator size={"large"} color={colors.secondary_color_medium} />
        }
        {(!loader) && jobList && jobList.map((job) => {
          return (
            <Pressable
              id={`job_id_${job.jobDetail._id}`}
              key={`job_id_${job.jobDetail._id}`}
              style={[
                setMargin(20).setMarginBottom,
                setMargin(5).setMarginHorizontal,
              ]}
              onPress={() => {
                navigation.navigate("talent_apply_job_page", {
                  jobDetails: job.jobDetail,
                });
              }}
            >
              <TalJobCard 
                {...job.jobDetail}
                currentUserId={props.currentUser._id}
              />
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
