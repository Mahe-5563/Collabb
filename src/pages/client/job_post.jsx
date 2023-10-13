import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  Text,
} from "react-native";

import { colors } from "../../css/colors";
import DashboardJobCard from "../../components/page_components/dashboard/dasboardJobCard";
import { apiGetClientJobPost } from "../../api/job_post";
import Navbar from "../../components/navbar";
import { textSize } from "../../css/common";

function JobPost(props) {
  const {
    setOpenModal,
    userId,
    openApplicationModal,
    setOpenApplicationModal,
  } = props;
  const [loader, setLoader] = useState(false);
  const [jobPosts, setJobPosts] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [userType] = useState("client");

  useEffect(() => {
    if (props?.route?.params?.userId) {
      setLoader(true);
      getJobPost(props?.route?.params?.userId, props?.route?.params?.pageType);
    }
  }, [props?.route?.params?.userId]);

  const getJobPost = (userId, pageType) => {
    apiGetClientJobPost(userId, (response) => {
      if (response.status == 200) setLoader(false);
      const jobPostsFilter = 
        response.res
          .filter(post => post.job_status == pageType)
          .sort( (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt) );
      setJobPosts(jobPostsFilter);
    });
  }

  return (
    <>
      <SafeAreaView>
        <Navbar {...props} title={"Select Job Post"} />
      </SafeAreaView>
      <ScrollView
        style={{
          margin: 20,
          //   maxHeight: 400,
        }}
        refreshControl={
          <RefreshControl 
            refreshing={isRefreshing}
            onRefresh={() => { setLoader(true); getJobPost(props?.route?.params?.userId) }}
          />
        }
      >
        {loader && (
          <ActivityIndicator
            size={"large"}
            color={colors.secondary_color_medium}
          />
        )}

        {!loader && (
          <>
            {jobPosts?.length > 0 ? 
              jobPosts?.map((post, index) => (
                <View key={`job_post_${index}`}>
                  <DashboardJobCard
                    jobDetail={post}
                    setOpenModal={setOpenModal}
                    setOpenApplicationModal={setOpenApplicationModal}
                    navigation={props.navigation}
                    userType={userType}
                    modalType={"application"}
                    pageType={props?.route?.params?.pageType}
                  />
                </View>
              ))
              :
              <View>
                <Text
                  style={{
                    fontSize: textSize,
                    color: colors.blue_light
                  }}
                >
                  No jobs found for this category.  
                </Text>
              </View>
            }
          </>
        )}
      </ScrollView>
    </>
  );
}

export default JobPost;
