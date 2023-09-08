import React, { useState, useEffect, useRef } from "react";
import { Modal, View, Pressable, Text, ScrollView, ActivityIndicator, } from "react-native";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { colors } from "../../../css/colors";
import { popupModal, multiSelectStyles } from "../../../css/interactables";
import { appFontFamilyBold, appFontFamilyMedium, textSubheaders } from "../../../css/common";
import DashboardJobCard from "./dasboardJobCard";
import { apiGetJobPostsOnCategory } from "../../../api/job_post";

function DashboardModals(props) {
	const { modalType, openModal, setOpenModal, category, userId } = props;
	const [loader, setLoader] = useState(false);
	const [jobPosts, setJobPosts] = useState();

	useEffect(() => {
		if(openModal) {
			// console.info("props: ", props);
			setLoader(true);
			apiGetJobPostsOnCategory(category, (response) => {
				if(response.status == 200) setLoader(false);
				const appliedJobPosts = response?.res.filter(post => post.applicants.includes(userId));
				setJobPosts(appliedJobPosts);
			})
		}
	}, [openModal]);
	
  return (
		<>
			{/* Current Job Modal */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={openModal}
				onRequestClose={() => setOpenModal(false)}
			>
				<View style={popupModal.modalView}>
					<View style={popupModal.modalBody}>
						<Pressable
							onPress={() => setOpenModal(false)}
							style={multiSelectStyles.closeIcon}
						>
							<FontAwesomeIcon 
								icon={faTimes} 
								size={22} 
								color={colors.white}
							/>
						</Pressable>
						<View>
							<Text
								style={{
									fontFamily: appFontFamilyBold,
									fontSize: textSubheaders,
									color: colors.secondary_color_medium,
								}}
							>
								{modalType == "completed_jobs" ? 
									"View Completed Jobs" 
								: "View Current Jobs"}
							</Text>
							<ScrollView
								style={{
									marginVertical: 16,
									maxHeight: 350,
								}}
							>
								{loader && <ActivityIndicator size={"large"} color={colors.secondary_color_medium} />}
								
								{!loader && jobPosts && 
									<>
										{jobPosts.map(post => (
											<DashboardJobCard {...post} />
										))}
									</>
								}
							</ScrollView>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
}

export default DashboardModals;
