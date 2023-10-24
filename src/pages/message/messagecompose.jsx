import {
  ScrollView,
  SafeAreaView,
  View,
  ActivityIndicator,
  Pressable,
  Text,
  Image,
  RefreshControl,
	ToastAndroid,
} from "react-native";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import * as DocumentPicker from "expo-document-picker";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { colors } from "../../css/colors";
import Navbar from "../../components/navbar";
import CTAButton from "../../components/cta_button";
import InputField from "../../components/input_field";
import { messagingStyles, textStyles } from "../../css/interactables";
import { appFontFamily, setMargin, setPadding, textHeaderMedium, textSize, textSubheaders } from "../../css/common";
import { apiSendMessage } from "../../api/messaging";

function MessageCompose(props) {
	const [composedMessage, setComposedMessage] = useState();
	const [formError, setFormError] = useState();
	const [attachments, setAttachments] = useState();
	const [sending, setSending] = useState(false);

	const uploadDocuments = async () => {
		await DocumentPicker.getDocumentAsync({ 
				type: "*/*", 
				copyToCacheDirectory: true,
				multiple: true,
			}).then(res => {
				const files = res.assets;
				setAttachments(files);
			}).catch(fail => {
				console.info("fail: ", fail);
			})
	}

	const sendMessage = async () => {
		
		if(composedMessage) {
			setSending(true);
			setFormError();
			// console.info(props?.route?.params);
			const recipientUsertype = props?.route?.params?.recipient?.usertype;
			const recipientId = props?.route?.params?.recipient?._id;
			const senderId = props?.route?.params?.sender;
			let fbAttachments = [];
			if(attachments?.length > 0) {
				const imagePromises = 
					Array.from(
						attachments, 
						(attachment) => 
							uploadDocumentsFirebase(attachment, senderId, props?.route?.params?.messageTitle)
					);
				const imageRes = await Promise.all(imagePromises);
				fbAttachments = imageRes;
			}
			const messageObj = {
				"clientid": recipientUsertype == "client" ? recipientId : senderId,
				"talentid": recipientUsertype == "client" ? senderId : recipientId,
				"threadtitle": props?.route?.params?.messageTitle,
				"messageid": +new Date(),
				"messagecontent": composedMessage,
				"attachments": fbAttachments?.length > 0 ? fbAttachments : [],
				"fromreci": senderId,
				"toreci": recipientId,
			}

			// console.info("Message Compose (messageObj): ", messageObj);
			apiSendMessage(messageObj, (response) => {
				// console.info("apiSendMessage (Response): ", response);
				if(response.message == "Message sent successfully!" || response.message == "Message appended successfully!") {
					setSending(false);
					ToastAndroid.show("Message sent successfully!", 3000);
					props.navigation.navigate( "message_inbox" )
				} else {
					ToastAndroid.show("Message send failed!", 3000);
				}
			})
		} else {
			setFormError("Mandatory Field");
		}
	}

	const uploadDocumentsFirebase = async (document, senderId, messageTitle) => {
		// File format => senderId-document name-timestamp
		const storageRef = ref(storage, `/mail-attachments/${senderId}-${document.name}-${Date.now()}`);

		const response = await uploadBytes(storageRef, document);
		const url = await getDownloadURL(response.ref);
		return { url, name: document.name };
	}

  return (
    <>
      <SafeAreaView>
        <Navbar {...props} title={"Compose message"} />
				<View
					style={[setPadding(20).setPadding]}
				>
					<View>
						<Text style={{ fontFamily: appFontFamily, fontSize: textSize }}>
							To:
						</Text>
						<Text style={{ fontFamily: appFontFamily, fontSize: textSubheaders, fontWeight: "bold", marginLeft: 20, }}>
							{props?.route?.params?.recipient?.firstName} {props?.route?.params?.recipient?.lastName}
						</Text>
					</View>
					<View style={setMargin(20).setMarginTop}>
						<InputField 
							isMultiLine
							placeholderText={"Compose your message here..."}
							onTextChange={(val) => { setComposedMessage(val) }}
							fieldKey={"compose_message"}
						/>
						{formError && 
							<Text style={[textStyles.errorMessage, setMargin(7).setMarginTop]}>
								{formError}
							</Text>
						}
					</View>
					<View style={{ marginTop: 20, }}>
						<Pressable
							style={messagingStyles.attachDocument}
							onPress={() => { uploadDocuments() }}
						>
							<FontAwesomeIcon icon={faPaperclip} size={18} />
							<Text style={{ marginLeft: 10, fontSize: textSize, fontFamily: appFontFamily }}>Attach Documents</Text>
						</Pressable>
						<View
							style={{ margin: 10, }}
						>
							<View>
								{attachments && attachments.map(attachment => (
									<Text 
										key={attachment.uri}
										style={messagingStyles.attachments}
									>
										{attachment?.name}
									</Text>
								))}
							</View>
						</View>
					</View>

					<View style={{ marginTop: 30, alignItems: "center" }}>
						<CTAButton 
							dark
							halfWidth
							title={sending ? "Sending..." : "Send Message"}
							onPress={sendMessage}
							isDisabled={sending}
						/>
					</View>
				</View>
      </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageCompose);
