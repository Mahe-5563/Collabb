import {
    ScrollView,
    View,
    Text,
    Image,
    Pressable,
    SafeAreaView,
    ToastAndroid,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { connect } from "react-redux";
  
  import {
    setPadding,
  } from "../../../css/common";
//   import Navbar from "../../components/navbar";
import NavbarHomepage from "../../navbar_homepage";
import DashboardCard from "./dashboardCard";
import { faBriefcase, faCircleCheck, faFileLines, faStar } from "@fortawesome/free-solid-svg-icons";
import DashboardModals from "./dashboardModals";
  
  function Dashboard(props) {
    const [openModal, setOpenModal] = useState(false)
    const [modalType, setModalType] = useState("");
    useEffect(() => {
      
      // console.info("props: ", props.userDetail.currentUser);
      
    }, [])
    
  
    return (
      <>
        {/* <SafeAreaView>
          <NavbarHomepage {...props}/>
        </SafeAreaView> */}
        <ScrollView 
          style={[setPadding(20).setPadding]}
        >
          <View 
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            <DashboardCard
              icon={faFileLines}
              title={"View Applications"}
              onPress={() => {
                ToastAndroid.show("View Applications", 500)
              }}
            />
            <DashboardCard
              icon={faBriefcase}
              title={"Current Jobs"}
              onPress={() => { 
                setOpenModal(true);
                setModalType("current_jobs");
                // ToastAndroid.show("Current Jobs", 500) 
              }}
            />
            <DashboardCard
              icon={faCircleCheck}
              title={"Completed Jobs"}
              onPress={() => { 
                setOpenModal(true);
                setModalType("completed_jobs");
                // ToastAndroid.show("Completed Jobs", 500) 
              }}
            />
            <DashboardCard
              icon={faStar}
              title={"Follows & Favourites"}
              onPress={() => { ToastAndroid.show("Follows & Favourites", 500) }}
            />
          </View>
          <DashboardModals
            modalType={modalType}
            openModal={openModal}
            setOpenModal={setOpenModal}
            category={props?.userProfile?.category}
            userId={props?.userDetail?.currentUser?._id}
          />
        </ScrollView>
      </>
    );
  }
  
  const mapStateToProps = (state) => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => {
    return {
    //   setCategoryAndSubcategory: (selection) => dispatch(setCategoryAndSubcategory(selection))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
  