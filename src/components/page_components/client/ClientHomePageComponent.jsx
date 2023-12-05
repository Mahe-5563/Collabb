import React, { useState, useEffect } from "react";
import { ActivityIndicator, ScrollView, Text, ToastAndroid, View } from "react-native";
import { connect } from "react-redux";

import ImgButton from "../../img_button";
import btnImg from "../../../../assets/images/btnImg.png";
import placeholderImg from "../../../../assets/images/placeholderImg.png";
import { setMargin, setPadding } from "../../../css/common";
import SimilarTalents from "../similar_talents";
import {
  setCurrentUserProfile,
  setCurrentUserProfileDetails,
} from "../../../../redux/actions/user";
import { apiGetTalents, apiGetUserProfile } from "../../../api/users";
import { homepageElements } from "../../../css/client";
import { colors } from "../../../css/colors";

function ClientHomePageComp(props) {
  const { navigation } = props;
  const [loader, setLoader] = useState(false);
  const [similarTalents, setSimilarTalents] = useState();

  const imgButtons = [
    {
      title: "Post a Job",
      btnBg: btnImg,
      onPress: () => {
        navigation.navigate(
          "client_choose_cat_subcat",
          { back_key: props.route.key }
        )
      },
    },
    {
      title: "Search Talents",
      btnBg: btnImg,
      onPress: function () {
        // ToastAndroid.show("Under development!", 3000);
        navigation.navigate(
          "search_talents",
          { back_key: props.route.key }
        )
      },
    }
  ];

  useEffect(() => {
    // Get User profile details...
    setLoader(true);
    if (props?.currentUser?._id) {
      apiGetUserProfile(props?.currentUser?._id, "client", (result) => {
        const talDetails = result?.res?.clientDetails;
        props.setCurrentUserProfileDetails(talDetails);
        apiGetTalents({pageno: 1, name: "", categoryid: ""}, (response) => {
          if(response?.res?.length > 0) {
            setSimilarTalents(response.res);
            setLoader(false);
          }
        })
      });
    }
    // Get possible client job posts...
  }, [props?.currentUser]);

  return (
    <>
      <ScrollView style={[setPadding(20).setPadding]}>
        <View>
          {imgButtons.map((btn) => (
            <ImgButton
              key={`imgbutton_${btn.title}`}
              bgImg={btn.btnBg}
              title={btn.title}
              onPress={btn.onPress}
              customCSS={[setMargin(25).setMarginBottom]}
            />
          ))}
        </View>
        {similarTalents && <View
          style={{
            marginTop: 20,
            paddingBottom: 40,
          }}
        >
          <Text style={homepageElements.suggTitle}>
            {"Similar to your Searches"}
          </Text>
          {loader ? 
            <ActivityIndicator size={"large"} color={colors.secondary_color} style={[setMargin(30).setMarginTop]} /> : 
            <SimilarTalents 
              {...props}
              similarTalents={similarTalents}
            />
          }
        </View>}
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientHomePageComp);
