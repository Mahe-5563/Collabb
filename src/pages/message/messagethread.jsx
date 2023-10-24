import {
  ScrollView,
  SafeAreaView,
  View,
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Navbar from "../../components/navbar";
import {
  appFontFamily,
  appFontFamilyBold,
  setMargin,
  setPadding,
  textContentSize,
  textSubheaders,
} from "../../css/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPaperclip,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { messagingStyles } from "../../css/interactables";
import { getDate, getTime } from "../../js/common";
import { colors } from "../../css/colors";
import { apiUpdateThreadStatus } from "../../api/messaging";

function MessageThread(props) {
  const [openThread, setOpenThread] = useState(2);
  const [messages, setMessages] = useState();
  const [recipient, setRecipient] = useState();

  useEffect(() => {
    if (props.route.params.message && props.route.params.recipient) {
      setMessages(props.route.params.message);
      setRecipient(props.route.params.recipient);
      setOpenThread(
        props.route.params.message.messages[
          props.route.params.message.messages.length - 1
        ]?.messageid
      );

      apiUpdateThreadStatus(props?.route?.params?.message?.threadtitle, true, (response) => {
        // console.info("apiUpdateThreadStatus (response): ", response);
      })
    }
  }, [props.route.params.message, props.route.params.recipient]);

  const handleMessageThread = (threadId) => {
    setOpenThread(threadId == openThread ? -1 : threadId);
  };

  return (
    <>
      <SafeAreaView>
        {recipient && (
          <Navbar
            {...props}
            // title={`${recipient?.firstName} ${recipient?.lastName}`}
          />
        )}
      </SafeAreaView>
      {messages && (
        <View style={[setPadding(20).setPadding]}>
          <Text
            style={{ fontSize: textContentSize, fontFamily: appFontFamilyBold }}
          >
            {messages?.threadtitle}
          </Text>
        </View>
      )}
      {messages && (
        <View style={[setPadding(20).setPadding, { display: "flex", flexDirection: "row" }]}>
          <Text
            style={[
              messagingStyles.recipientIcon,
              setMargin(10).setMarginRight
            ]}
          >
            {recipient?.firstName?.charAt(0)}
          </Text>
          <Text
            style={{ 
              fontSize: textSubheaders, 
              fontFamily: appFontFamily,
              marginTop: "auto",
              marginBottom: "auto",
              flexWrap: "wrap",
              maxWidth: "90%",
              // borderWidth: 1,
            }}
          >
            {recipient?.firstName} {recipient?.lastName} 
          </Text>
        </View>
      )}
      <View style={[setPadding(20).setPaddingHorizontal, setPadding(5).setPaddingBottom]}>
        <Pressable
          style={{ alignSelf: "flex-end", borderColor: colors.light_color, }}
          onPress={() => {
            props.navigation.navigate(
              "message_compose",
              {
                recipient,
                sender: messages.clientid,
                messageTitle: messages?.threadtitle,
              }
            )
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderRadius: 50,
              alignItems: "center",
              padding: 10,
            }}
          >
            <FontAwesomeIcon icon={faReply} />
          </View>
          <Text style={{ alignSelf: "center", fontFamily: appFontFamily, marginTop: 5, }}>
            Reply
          </Text>
        </Pressable>
      </View>
      {messages && (
        <ScrollView style={[setPadding(20).setPaddingHorizontal]}>
          {messages.messages.map((message) => {
            return (
              <Pressable
                key={`message_${message.messageid}`}
                style={messagingStyles.threadSection}
                onPress={() => handleMessageThread(message.messageid)}
              >
                <Text style={messagingStyles.threadDate}>
                  {`${getDate(Number(message.messageid))} ${getTime(
                    Number(message.messageid)
                  )}`}
                </Text>
                <View style={messagingStyles.threadMessageSection}>
                  <Text
                    style={messagingStyles.threadMessage}
                    numberOfLines={openThread == message.messageid ? 0 : 2}
                  >
                    {message.messagecontent}
                  </Text>
                  <View
                    style={{
                      width: "5%",
                      marginTop: "auto",
                      marginBottom: "auto",
                      alignItems: "flex-end",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={
                        openThread == message.messageid
                          ? faAngleUp
                          : faAngleDown
                      }
                      size={18}
                    />
                  </View>
                </View>
                {message.attachments.length > 0 && (
                  <View
                    style={{
                      marginTop: 10,
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap"
                    }}
                  >
                    {message?.attachments?.map(attachment => (
                      <TouchableOpacity 
                        key={`attachment_${attachment.url}`}
                        style={messagingStyles.threadAttachment}
                      >
                        <FontAwesomeIcon icon={faPaperclip} size={14} />
                        <Text style={{ fontSize: 14, marginLeft: 5, paddingRight: 10, }} numberOfLines={1}>
                          {attachment.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                    {/* <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        paddingHorizontal: 6,
                        paddingVertical: 3,
                        borderRadius: 50,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontSize: 14 }}>+2</Text>
                    </TouchableOpacity> */}
                  </View>
                )}
              </Pressable>
            );
          })}
        </ScrollView>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageThread);

/* 
<Pressable 
						style={messagingStyles.threadSection}
						onPress={() => handleMessageThread(1)}
					>
						<Text style={messagingStyles.threadDate}>
							{"01/04/2023 08:14"}
						</Text>
						<View style={messagingStyles.threadMessageSection}>
							<Text style={messagingStyles.threadMessage} numberOfLines={openThread == 1 ? 0 : 2}>
								{
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit lacus, commodo hendrerit fringilla tincidunt, convallis vel quam. Nam felis neque, faucibus vel dui sed, faucibus pellentesque nisi."
								}
							</Text>
							<View
								style={{ width: "5%", marginTop: "auto", marginBottom: "auto", alignItems: "flex-end" }}
							>
								<FontAwesomeIcon
									icon={openThread == 1 ? faAngleUp : faAngleDown}
									size={18}
								/>
							</View>
						</View>
						<View
							style={{ 
								marginTop: 10,
								display:"flex",
								flexDirection: "row"
							}}
						>
							<TouchableOpacity
								style={{
									borderWidth: 1,
									paddingHorizontal: 6,
									paddingVertical: 3,
									borderRadius: 50,
									display: "flex",
									flexDirection: "row",
									marginRight: 10,
								}}
							>
								<FontAwesomeIcon icon={faPaperclip} size={14} />
								<Text style={{ fontSize: 14, marginLeft: 5, }}>Attachment 1</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									borderWidth: 1,
									paddingHorizontal: 6,
									paddingVertical: 3,
									borderRadius: 50,
									display: "flex",
									flexDirection: "row",
									marginRight: 10,
								}}
							>
								<FontAwesomeIcon icon={faPaperclip} size={14} />
								<Text style={{ fontSize: 14, marginLeft: 5, }}>Attachment 2</Text>
							</TouchableOpacity>
							// {When the thread is open, display all the attachments and not the count of the rest of the attachments.}
							<TouchableOpacity
								style={{
									borderWidth: 1,
									paddingHorizontal: 6,
									paddingVertical: 3,
									borderRadius: 50,
									display: "flex",
									flexDirection: "row",
								}}
							>
								<Text style={{ fontSize: 14 }}>+2</Text>
							</TouchableOpacity>
						</View>
					</Pressable>
*/
