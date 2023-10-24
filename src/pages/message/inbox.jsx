import {
  ScrollView,
  SafeAreaView,
  View,
  ActivityIndicator,
  Pressable,
  Text,
  Image,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Navbar from "../../components/navbar";
import {
  appFontFamily,
  appFontFamilyBold,
  setPadding,
  textHeaderLarge,
  textHeaderMedium,
  textSize,
} from "../../css/common";
import { colors } from "../../css/colors";
import { messagingStyles } from "../../css/interactables";
import emptyInbox from "../../../assets/icons/empty_inbox.png";
import { getUserMessages } from "../../api/messaging";
import { apiGetDetailsofUsers } from "../../api/applications";
import { getShortDate, getTime } from "../../js/common";

function Inbox(props) {
  const [loader, setLoader] = useState();
  const [isMessagesPresent, setIsMessagesPresent] = useState();
  const [myMessages, setMyMessages] = useState();
  const [refresh, setRefresh] = useState(false);
  const [recipients, setRecipients] = useState();

  useEffect(() => {
    if (props?.currentUser?._id) {
      setLoader(true);
      const currentUserId = props?.currentUser?._id;
      // console.info("Inbox (currentUserId): ", currentUserId);
      getUserMessagesHandler(currentUserId);
    }
  }, [props?.currentUser]);

  const getUserMessagesHandler = (currentUserId) => {
    getUserMessages(currentUserId, (response) => {
      // console.info("getUserMessages (response): ", response);
      if (response) {
        setLoader(false);
        setRefresh(false);
        if (response?.res?.length > 0) {
          setIsMessagesPresent(true);
          setMyMessages(response.res);
          getRecipientUsers(response.res);
        } else {
          setIsMessagesPresent(false);
          setMyMessages();
        }
      }
    });
  };

  const getRecipientUsers = (messages) => {
    let reci = [];
    messages.forEach((message) => {
      if (props?.currentUser?.usertype == "client") {
        reci.push(message.talentid);
      } else {
        reci.push(message.clientid);
      }
    });

    apiGetDetailsofUsers(reci, (response) => {
      setRecipients(response.res);
    });
  };

  const setRefreshControl = () => {
    setRefresh(true);
    getUserMessagesHandler(props?.currentUser?._id);
  };

  return (
    <>
      <SafeAreaView>
        <Navbar {...props} title={"Inbox"} />
      </SafeAreaView>
      {loader && (
        <ActivityIndicator
          size={"large"}
          color={colors.secondary_color}
          style={{ marginTop: 50 }}
        />
      )}
      {!loader && (
        <>
          {isMessagesPresent ? (
            <ScrollView
              style={[setPadding(20).setPadding]}
              refreshControl={
                <RefreshControl
                  onRefresh={setRefreshControl}
                  refreshing={refresh}
                />
              }
            >
              {recipients?.length > 0 &&
                myMessages?.map((message) => {
                  // isRead ? messagingStyles.read : messagingStyles.notopened;
                  const currentRecipient =
                    props?.currentUser?.usertype == "client"
                      ? recipients.filter(
                          (recipient) => recipient[message.talentid]
                        )[0][message.talentid].userDetail
                      : recipients.filter(
                          (recipient) => recipient[message.clientid]
                        )[0][message.clientid].userDetail;

                  const checkRead = message.opened
                    ? messagingStyles.read
                    : messagingStyles.notopened

                  const lastMessageDate = getShortDate(
                    message?.messages[message?.messages?.length - 1]?.messageid
                  );

                  const lastMessageTime = getTime(
                    message?.messages[message?.messages?.length - 1]?.messageid
                  );

                  return (
                    <Pressable
                      key={`message_${message._id}`}
                      style={messagingStyles.messageCard}
                      onPress={() => {
                        props.navigation.navigate(
                          "message_thread",
                          {
                            message,
                            recipient: currentRecipient,
                          }
                        );
                      }}
                    >
                      <View style={{ width: "15%" }}>
                        <Text
                          style={[
                            messagingStyles.recipientIcon,
                            ...[checkRead],
                          ]}
                        >
                          {currentRecipient?.firstName?.charAt(0)}
                        </Text>
                      </View>
                      <View style={{ paddingHorizontal: 10, width: "70%" }}>
                        <Text
                          style={[
                            messagingStyles.recipientName,
                            ...[checkRead],
                          ]}
                          numberOfLines={1}
                        >
                          {currentRecipient?.firstName}{" "}
                          {currentRecipient?.lastName}
                        </Text>
                        <Text
                          style={[messagingStyles.messageTitle, ...[checkRead]]}
                          numberOfLines={1}
                        >
                          {message?.threadtitle}
                        </Text>
                        <Text
                          style={[
                            messagingStyles.messageContent,
                            ...[checkRead],
                          ]}
                          numberOfLines={1}
                        >
                          {
                            message?.messages[message?.messages?.length - 1]
                              ?.messagecontent
                          }
                        </Text>
                      </View>
                      <View style={{ width: "15%" }}>
                        <Text style={[{ textAlign: "right" }, ...[checkRead]]}>
                          {lastMessageDate}
                        </Text>
                        <Text style={[{ textAlign: "right" }, ...[checkRead]]}>
                          {lastMessageTime}
                        </Text>
                        {message.messages.length > 1 ?
                          <Text style={[{ textAlign: "right", marginTop: "auto" }, ...[checkRead]]}>
                            +{message.messages.length}
                          </Text>
                        : ""}
                      </View>
                    </Pressable>
                  );
                })}
            </ScrollView>
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 0.8,
              }}
            >
              <Image
                source={emptyInbox}
                style={{
                  height: 180,
                  width: 200,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 24,
                  marginTop: 10,
                  fontFamily: appFontFamily,
                }}
              >
                Oops! Seems like you don't have any messages yet. Please wait
                till a client contacts you.
              </Text>
            </View>
          )}
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state.userDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    //   setCategoryAndSubcategory: (selection) => dispatch(setCategoryAndSubcategory(selection))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
