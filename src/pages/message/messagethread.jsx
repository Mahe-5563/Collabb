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
import { setPadding, textContentSize } from "../../css/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { messagingStyles } from "../../css/interactables";
import { getDate, getTime } from "../../js/common";

function MessageThread(props) {
  const [openThread, setOpenThread] = useState(2);
  const [messages, setMessages] = useState();
  const [recipient, setRecipient] = useState();

  useEffect(() => {
    if (props.route.params.message && props.route.params.recipient) {
      setMessages(props.route.params.message);
      setRecipient(props.route.params.recipient);
			setOpenThread(props.route.params.message.messages[props.route.params.message.messages.length - 1]?.messageid);
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
            title={`${recipient?.firstName} ${recipient?.lastName}`}
          />
        )}
      </SafeAreaView>
      {messages && (
        <View style={[setPadding(20).setPadding]}>
          <Text style={{ fontSize: textContentSize }}>
            {messages?.threadtitle}
          </Text>
        </View>
      )}
      {messages && (
        <ScrollView style={[setPadding(20).setPadding]}>
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
                {message.attachments.length > 0 && 
									<View
										style={{
											marginTop: 10,
											display: "flex",
											flexDirection: "row",
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
											<Text style={{ fontSize: 14, marginLeft: 5 }}>
												Attachment 1
											</Text>
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
											<Text style={{ fontSize: 14, marginLeft: 5 }}>
												Attachment 2
											</Text>
										</TouchableOpacity>
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
								}
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
