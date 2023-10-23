import React, { useState, useEffect } from "react";
import { ScrollView, ToastAndroid, View } from "react-native";
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
import { apiGetUserProfile } from "../../../api/users";

function ClientHomePageComp(props) {
  const { navigation } = props;
  const [following, setFollowing] = useState(false);

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
        ToastAndroid.show("Under development!", 3000);
        // navigation.navigate(
        //   "search_talents",
        //   { back_key: props.route.key }
        // )
      },
    }
  ];

  const similarTalents = [
    {
      id: "1",
      name: "Lionel Messi",
      profilePic: placeholderImg,
      jobRole: "Management Consultant",
    },
    {
      id: "2",
      name: "Erling Haaland",
      profilePic: placeholderImg,
      jobRole: "Art Dealer",
    },
    {
      id: "3",
      name: "Eden Hazard",
      profilePic: placeholderImg,
      jobRole: "Web Developer",
    },
  ];

  useEffect(() => {
    // Get User profile details...
    if (props?.currentUser?._id) {
      apiGetUserProfile(props?.currentUser?._id, "client", (result) => {
        const talDetails = result?.res?.clientDetails;
        props.setCurrentUserProfileDetails(talDetails);
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
        <View
          style={{
            // paddingHorizontal: 20,
            marginTop: 20,
            paddingBottom: 40,
          }}
        >
          <SimilarTalents 
            {...props}
            similarTalents={similarTalents}
          />
        </View>
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
