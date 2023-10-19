import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { connect } from "react-redux";
  
  import {
    appFontFamily,
    setMargin,
    setPadding, textContentSize,
  } from "../../../css/common";
//   import Navbar from "../../components/navbar";
import NavbarHomepage from "../../navbar_homepage";
import DashboardCard from "./dashboardCard";
import { faBriefcase, faCircleCheck, faFileLines, faStar } from "@fortawesome/free-solid-svg-icons";
import DashboardModals from "./dashboardModals";
import { colors } from "../../../css/colors";
import { buttons } from "../../../css/interactables";
  
  function Dashboard(props) {
    const [openModal, setOpenModal] = useState(false)
    const [modalType, setModalType] = useState("");
    const [userType, setUserType] = useState();
    const [openApplicationModal, setOpenApplicationModal] = useState(false);
    useEffect(() => {
      setUserType(props?.userDetail?.currentUser?.usertype);
    }, [])
    
    /* useEffect(() => {
      if(props?.route?.params?.pageNo) {
        console.info("Page No: ", props?.route?.params?.pageNo);
        // props.setCurrentPage(props?.route?.params?.pageNo);
      }
    }, [props?.route?.params?.pageNo]) */
    
  
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
            <TouchableOpacity
              activeOpacity={0.5}
              style={[ buttons.dashboardButtons, setMargin(20).setMarginBottom ]}
              onPress={() => {
                if(userType == "talent") {
                  props.navigation.navigate(
                    "talent_applications"
                  )
                } else {
                  props.navigation.navigate(
                    "job_post",
                    {
                      userId: props?.userDetail?.currentUser?._id,
                      pageType: "justnow"
                    }
                  )
                  // setOpenApplicationModal(true)
                }
              }}
            >
              <Text
                style={{
                  fontSize: textContentSize,
                  fontFamily: appFontFamily
                }}
              >
                {userType == "talent" ? "My Applied Jobs" : "Active Jobs"}
              </Text>
            </TouchableOpacity>
            {userType == "client" &&
              <TouchableOpacity
                activeOpacity={0.5}
                style={[ buttons.dashboardButtons, setMargin(20).setMarginBottom ]}
                onPress={() => {
                  props.navigation.navigate(
                    "job_post",
                    {
                      userId: props?.userDetail?.currentUser?._id,
                      pageType: "working"
                    }
                  )
                }}
              >
                <Text
                  style={{
                    fontSize: textContentSize,
                    fontFamily: appFontFamily
                  }}
                >
                  {"Ongoing Jobs"}
                </Text>
              </TouchableOpacity>
            }
            {userType == "client" &&
              <TouchableOpacity
                activeOpacity={0.5}
                style={[ buttons.dashboardButtons, setMargin(20).setMarginBottom ]}
                onPress={() => {
                  props.navigation.navigate(
                    "job_post",
                    {
                      userId: props?.userDetail?.currentUser?._id,
                      pageType: "completed"
                    }
                  )
                }}
              >
                <Text
                  style={{
                    fontSize: textContentSize,
                    fontFamily: appFontFamily
                  }}
                >
                  {"Completed Jobs"}
                </Text>
              </TouchableOpacity>
            }
            {userType == "client" &&
              <TouchableOpacity
                activeOpacity={0.5}
                style={[ buttons.dashboardButtons, setMargin(20).setMarginBottom ]}
                onPress={() => {
                  ToastAndroid.show("Under development!", 3000);
                }}
              >
                <Text
                  style={{
                    fontSize: textContentSize,
                    fontFamily: appFontFamily
                  }}
                >
                  {"Favourite Talents"}
                </Text>
              </TouchableOpacity>
            }
            {/* {userType == "client" && 
              <TouchableOpacity
                activeOpacity={0.5}
                style={[ buttons.dashboardButtons, setMargin(20).setMarginBottom ]}
                onPress={() => { 
                  setOpenModal(true);
                  setModalType("current_jobs");
                }}
              >
                <Text
                  style={{
                    fontSize: textContentSize,
                    fontFamily: appFontFamily
                  }}
                >
                  Current Jobs
                </Text>
              </TouchableOpacity>
            } */}
            {/* <DashboardCard
              icon={faFileLines}
              title={"View Applications"}
              onPress={() => {
                // ToastAndroid.show("View Applications", 500)
                if(userType == "talent") {
                  props.navigation.navigate(
                    "talent_applications"
                  )
                } else {
                  setOpenApplicationModal(true)
                }
              }}
            />
            {userType == "client" && 
              <DashboardCard
                icon={faBriefcase}
                title={"Current Jobs"}
                onPress={() => { 
                  setOpenModal(true);
                  setModalType("current_jobs");
                  // ToastAndroid.show("Current Jobs", 500) 
                }}
              />
            }
            <DashboardCard
              icon={faCircleCheck}
              title={"Completed Jobs"}
              onPress={() => { 
                setOpenModal(true);
                setModalType("completed_jobs");
                // ToastAndroid.show("Completed Jobs", 500) 
              }}
            />
            {userType == "client" && 
              <DashboardCard
                icon={faStar}
                title={"Follows & Favourites"}
                onPress={() => { ToastAndroid.show("Follows & Favourites", 500) }}
              />
            } */}
          </View>
          <DashboardModals
            {...props}
            modalType={modalType}
            openModal={openModal}
            setOpenModal={setOpenModal}
            category={props?.userProfile?.category}
            userId={props?.userDetail?.currentUser?._id}
            openApplicationModal={openApplicationModal}
            setOpenApplicationModal={setOpenApplicationModal}
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
  