import {
  ScrollView,
  SafeAreaView,
  View,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { colors } from "../../css/colors";
import Navbar from "../../components/navbar";
import { setPadding, textSize } from "../../css/common";
import {
  apiGetDetailsofUsers,
  apiGetTalentApplications,
} from "../../api/applications";
import ApplicationCard from "../../components/page_components/application/ApplicationCard";
import TalentApplicationCard from "../../components/page_components/application/TalentApplicationCard";

function TalentApplications(props) {
  const [userType, setUserType] = useState();
  const [applications, setApplications] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setUserType(props?.userDetail?.currentUser?.usertype);
  }, []);

  useEffect(() => {
    if (userType == "talent") {
      apiGetTalentApplications(
        props?.userDetail?.currentUser?._id,
        (response) => {
          // response.res.applicants.filter
          setApplications(response.res);
          setLoader(false);
        }
      );
    } else if (userType == "client") {
      const applicantss = props?.route?.params?.jobDetails?.applicants;
      let applicantids = [];
      applicantss.forEach((applicant) => {
        applicantids.push(applicant.userid);
      });
      apiGetDetailsofUsers(applicantids, (response) => {
        setApplications(response.res);
        setLoader(false);
      });
    }
  }, [userType]);

  return (
    <>
      <SafeAreaView>
        <Navbar {...props} title={userType == "client" ? "Applicants" : "Applications"} />
      </SafeAreaView>
      <ScrollView style={[setPadding(20).setPadding]}>
        {loader && (
          <ActivityIndicator size={"large"} color={colors.secondary_color} />
        )}
        {!loader &&
          (applications?.length > 0 ? (
            applications?.map((application, index) => {
              return (
                <Pressable
                  key={`application_${index}`}
                  onPress={() => {
                    if (userType == "client") {
                      props.navigation.navigate("talent_apply_profile_page", {
                        application,
                        jobDetails: props?.route?.params?.jobDetails,
                        type: "view_application",
                      });
                    } else {
                      props.navigation.navigate("talent_apply_job_page", {
                        jobDetails: application,
                        type: "view_application",
                        usertype: "talent",
                      });
                    }
                  }}
                >
                  {userType == "client" ? (
                    <TalentApplicationCard
                      {...application}
                      jobDetails={props?.route?.params?.jobDetails}
                    />
                  ) : (
                    <ApplicationCard
                      {...application}
                      currentUser={props?.userDetail?.currentUser}
                      type="applications"
                    />
                  )}
                </Pressable>
              );
            })
          ) : (
            <View>
              {userType == "client" ? (
                <View>
                  <Text
                    style={{
                      fontSize: textSize,
                    }}
                  >
                    Seems like there are no applicants for your job post. Yet!
                  </Text>
                </View>
              ) : (
                <Pressable
                  onPress={() => {
                    props.navigation.navigate("talent_home_page", {
                      pageNo: 1,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: textSize,
                    }}
                  >
                    Hmmm... Seems like you haven't applied for any jobs yet!{" "}
                    <Text style={{ color: colors.blue_light }}>
                      Click here to view the jobs that you can apply!
                    </Text>
                  </Text>
                </Pressable>
              )}
            </View>
          ))}
      </ScrollView>
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    //   setCategoryAndSubcategory: (selection) => dispatch(setCategoryAndSubcategory(selection))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TalentApplications);
