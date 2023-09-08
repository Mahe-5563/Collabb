import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, View, Text, Pressable, } from "react-native";

import NavbarHomepage from "../../components/navbar_homepage";
import FixedBottomNav from "../../components/fixedbottom_nav";
import Dashboard from "../../components/page_components/dashboard/Dashboard";
import { setCurrentUserProfile, setCurrentUserProfileDetails } from "../../../redux/actions/user";
import TalentHomePageComponent from "../../components/page_components/talent/TalentHomePageComponent";

function TalentIndex(props) {
  const { navigation } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (pageNo) => {

    switch (pageNo) {
      case 1:
        return <TalentHomePageComponent {...props} />
      case 2:
        return <Dashboard {...props} />
      case 3:
        return <Text>Message Box</Text>
      case 4:
        return <Text>Account</Text>
      default:
        break;
    }
  }

  return (
    <>
      <SafeAreaView>
        {/* <Navbar {...props} goToHome title="Dashboard" homePage={""} /> */}
        <NavbarHomepage {...props}/>
      </SafeAreaView>
      {changePage(currentPage)}
      <FixedBottomNav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state.userDetail,
})

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUserDetails: currentUser => dispatch(setCurrentUserProfile(currentUser)),
    setCurrentUserProfileDetails: currentUser => dispatch(setCurrentUserProfileDetails(currentUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalentIndex);