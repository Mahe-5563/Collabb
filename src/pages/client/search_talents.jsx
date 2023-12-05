import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Modal,
  Text,
  ToastAndroid,
  Pressable,
	RefreshControl,
	ActivityIndicator,
} from "react-native";

import Navbar from "../../components/navbar";
import { freelanceCategories } from "../../json/cat_subcat";
import DropdownComponent from "../../components/dropdown";
import TalentApplicationCard from "../../components/page_components/application/TalentApplicationCard";
import InputField from "../../components/input_field";
import { appFontFamily, setMargin, textSize } from "../../css/common";
import { apiGetTalents } from "../../api/users";

function SearchTalents(props) {
	const [talentList, setTalentList] = useState();
	const [selectedCategory, setSelectedCategory] = useState();
	const [filters, setFilters] = useState({
		pageno: 1,
		name: "",
		categoryid: ""
	})
	const [loader, setLoader] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
	const [findUsers, setFindUsers] = useState(true);

	useEffect(() => {
		onRefresh();
		// getTalents(filters);
	}, [filters]);

	const getTalents = (filters) => {
		setLoader(true);
		setRefreshing(true);
		apiGetTalents(filters, (response) => {
			// console.info("SearchTalents (response): ", response);
			setLoader(false);
			setRefreshing(false);
			if(response?.res?.length > 0) {
				setTalentList(response.res);
				setFindUsers(true);
			} else if (response?.message == "Cannot find users!") {
				setFindUsers(false);
			}
		})
	}

	const onRefresh = () => {
		setRefreshing(true);
    setLoader(true);
    setTalentList([]);
		setFindUsers(true);
    getTalents(filters);
	}
	
  return (
    <>
      <Navbar {...props} title={"Search Talents"} />
			<View
				style={{
					margin: 20,
				}}
			>
				<DropdownComponent
					prompt={"Filter by Category"}
					items={freelanceCategories}
					stateValue={selectedCategory}
					onValueChange={(category) => {
						setSelectedCategory(category);
						setFilters(prev => ({ ...prev, categoryid: freelanceCategories.filter(cat => cat.value == category)[0]?.id }));
					}}
				/>
			</View>
			<ScrollView
				style={{
					paddingHorizontal: 20,
					marginVertical: 5,
				}}
				refreshControl={
					<RefreshControl
						onRefresh={onRefresh} 
						refreshing={refreshing}
					/>
				}
			>
				{talentList?.length == 0 && 
					!findUsers && 
					<Text
						style={{
							fontFamily: appFontFamily,
							fontSize: textSize,
							alignSelf: "center"
						}}
					>
						Cannot Find Users for the category!
					</Text>
				}
				{talentList && talentList.map((talent, index) => (
					<Pressable
						key={`talent_${index}`}
						onPress={() => {
							const application = {
								[talent.userDetail._id]: {
									userDetail: talent.userDetail,
									profileDetail: talent.profileDetail,
								}
							}
							props.navigation.navigate("talent_apply_profile_page", {
								application,
								type: "view_application",
								page: "search_talents",
								clientId: props.currentUser._id
							});
						}}
					>
						<TalentApplicationCard 
							search_talent
							{...talent} 
						/>
					</Pressable>
				))}
			</ScrollView>
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state.userDetail,
  ...state.currentUser,
});

export default connect(mapStateToProps)(SearchTalents);
