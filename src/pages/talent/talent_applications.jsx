import { ScrollView, SafeAreaView, View, ActivityIndicator, Pressable, ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { colors } from "../../css/colors";
import Navbar from "../../components/navbar";
import { setPadding } from "../../css/common";
import apiGetTalentApplications from "../../api/applications";
import ApplicationCard from "../../components/page_components/application/ApplicationCard";

function TalentApplications(props) {
  const [userType, setUserType] = useState();
  const [applications, setApplications] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setUserType(props?.userDetail?.currentUser?.usertype);
  }, []);

  useEffect(() => {
    if(userType == "talent") {
      apiGetTalentApplications(props?.userDetail?.currentUser?._id, (response) => {
        setApplications(response.res);
        setLoader(false);
      })
    }
  }, [userType])

  return (
    <>
      <SafeAreaView>
        <Navbar
          {...props}
          title={"Applications"}
        />
      </SafeAreaView>
      <ScrollView style={[setPadding(20).setPadding]}>
        {loader && <ActivityIndicator size={"large"} color={colors.secondary_color} />}
        {!loader && applications?.map((application, index) => (
          <Pressable
            key={`application_${index}`}
            onPress={() => {
              props.navigation.navigate("talent_apply_job_page", {
                jobDetails: application,
                type: "view_application"
              });
            }}
          >
            <ApplicationCard {...application} />
          </Pressable>
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
