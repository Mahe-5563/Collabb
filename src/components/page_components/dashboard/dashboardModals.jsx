import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  View,
  Pressable,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { colors } from "../../../css/colors";
import { popupModal, multiSelectStyles } from "../../../css/interactables";
import {
  appFontFamilyBold,
  appFontFamilyMedium,
  textSubheaders,
} from "../../../css/common";
import DashboardJobCard from "./dasboardJobCard";
import {
  apiGetClientJobPost,
  apiGetJobPostsOnCategory,
} from "../../../api/job_post";

function DashboardModals(props) {
  const {
    modalType,
    openModal,
    setOpenModal,
    category,
    userId,
    openApplicationModal,
    setOpenApplicationModal,
  } = props;
  const [loader, setLoader] = useState(false);
  const [jobPosts, setJobPosts] = useState();
  const [userType, setUserType] = useState();

  useEffect(() => {
    if (openModal || openApplicationModal) {
      if (props.currentUser.usertype == "client") {
        setLoader(true);
        apiGetClientJobPost(userId, (response) => {
          if (response.status == 200) setLoader(false);
          setJobPosts(response?.res?.sort((a, b) => (+new Date(b.createdAt)) - (+new Date(a.createdAt))));
        });
      } else if (props.currentUser.usertype == "talent") {
        setLoader(true);
        apiGetJobPostsOnCategory(category, (response) => {
          if (response.status == 200) setLoader(false);
          const appliedJobPosts = response?.fullObj.filter((post) =>
            post.jobDetail.applicants.includes(userId)
          );
          setJobPosts(appliedJobPosts.sort((a, b) => (+new Date(b.jobDetail.createdAt)) - (+new Date(a.jobDetail.createdAt))));
        });
      }
    }
  }, [openModal, openApplicationModal]);

  useEffect(() => {
    if (props?.currentUser?.usertype) setUserType(props?.currentUser?.usertype);
  }, [props?.currentUser?.usertype]);

  return (
    <>
      {/* Current Job Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <View style={popupModal.modalView}>
          <View style={popupModal.modalBody}>
            <Pressable
              onPress={() => setOpenModal(false)}
              style={multiSelectStyles.closeIcon}
            >
              <FontAwesomeIcon icon={faTimes} size={22} color={colors.white} />
            </Pressable>
            <View>
              <Text
                style={{
                  fontFamily: appFontFamilyBold,
                  fontSize: textSubheaders,
                  color: colors.secondary_color_medium,
                }}
              >
                {modalType == "completed_jobs"
                  ? "View Completed Jobs"
                  : "View Current Jobs"}
              </Text>
              <ScrollView
                style={{
                  marginVertical: 16,
                  maxHeight: 350,
                }}
              >
                {loader && (
                  <ActivityIndicator
                    size={"large"}
                    color={colors.secondary_color_medium}
                  />
                )}

                {!loader && jobPosts && (
                  <>
                    {jobPosts.map((post, index) => (
                      <View key={`job_post_${index}`}>
                        <DashboardJobCard
                          {...(userType == "client"
                            ? { jobDetail: post }
                            : { ...post })}
                          setOpenModal={props.setOpenModal}
                          navigation={props.navigation}
                          userType={userType}
                        />
                      </View>
                    ))}
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>

      {/* Applications Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={openApplicationModal}
        onRequestClose={() => setOpenApplicationModal(false)}
      >
        <View style={popupModal.modalView}>
          <View style={popupModal.modalBody}>
            <Pressable
              onPress={() => setOpenApplicationModal(false)}
              style={multiSelectStyles.closeIcon}
            >
              <FontAwesomeIcon icon={faTimes} size={22} color={colors.white} />
            </Pressable>
            <View>
              <Text
                style={{
                  fontFamily: appFontFamilyBold,
                  fontSize: textSubheaders,
                  color: colors.secondary_color_medium,
                }}
              >
                {"Select your job post"}
              </Text>
              <ScrollView
                style={{
                  marginVertical: 16,
                  maxHeight: 400,
                }}
              >
                {loader && (
                  <ActivityIndicator
                    size={"large"}
                    color={colors.secondary_color_medium}
                  />
                )}

                {!loader && jobPosts && (
                  <>
                    {jobPosts.map((post, index) => (
                      <View key={`job_post_${index}`}>
                        <DashboardJobCard
                          {...(userType == "client"
                            ? { jobDetail: post }
                            : { ...post })}
                          setOpenModal={setOpenModal}
                          setOpenApplicationModal={setOpenApplicationModal}
                          navigation={props.navigation}
                          userType={userType}
                          modalType={"application"}
                        />
                      </View>
                    ))}
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default DashboardModals;
