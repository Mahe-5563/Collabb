import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { connect } from "react-redux";

import FixedBottomNav from "../../components/fixedbottom_nav";
import NavbarHomepage from "../../components/navbar_homepage";
import ClientHomePageComp from "../../components/page_components/client/ClientHomePageComponent";
import { setCurrentUserProfile } from "../../../redux/actions/user";
import Dashboard from "../../components/page_components/dashboard/Dashboard";

function ClientIndex(props) {
  const { navigation, route } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    if(props?.route?.params?.userDetails)
      props.setCurrentUserDetails(props?.route?.params?.userDetails);
  }, [props?.route?.params])
  

  const changePage = (pageNo) => {

    switch (pageNo) {
      case 1:
        return <ClientHomePageComp {...props} />
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
        <NavbarHomepage {...props} />
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
    // setCurrentUserProfileDetails: currentUser => dispatch(setCurrentUserProfileDetails(currentUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientIndex);
