import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Modal,
  Text,
  ToastAndroid,
  Pressable,
} from "react-native";

import Navbar from "../../components/navbar";
import { freelanceCategories } from "../../json/cat_subcat";
import DropdownComponent from "../../components/dropdown";
import TalentApplicationCard from "../../components/page_components/application/TalentApplicationCard";
import InputField from "../../components/input_field";
import { setMargin } from "../../css/common";
import { apiGetTalents } from "../../api/users";

function SearchTalents(props) {
	const [talentList, setTalentList] = useState();
	const [selectedCategory, setSelectedCategory] = useState();
	const [filters, setFilters] = useState({
		pageno: 1,
		name: "",
		categoryid: ""
	})

	useEffect(() => {
		apiGetTalents(filters, (response) => {
			// console.info("SearchTalents (response): ", response);
			setTalentList(response.res);
		})
	}, [filters]);
	
  return (
    <>
      <Navbar {...props} title={"Search Talents"} />
			<View
				style={{
					margin: 20,
				}}
			>
				{/* <View
					style={{
						display: "flex",
						flexDirection: "row",
						marginBottom: 10,
					}}
				>
					<InputField
						placeholderText={"Search by talent name"}
						onTextChange={(value) => {
							setFilters(prev => ({ ...prev, name: value }));
						}}
						fieldKey={""}
						customCSS={[{ width: "100%" }]}
					/>
					<Pressable
						style={{
							borderWidth: 1,
							borderRadius: 5,
						}}
					>
						<Text style={{  }}>Go</Text>
					</Pressable>
				</View> */}
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
			>
				{talentList && talentList.map((talent, index) => (
					<Pressable
						key={`talent_${index}`}
						onPress={() => {
							console.info("Search Talents (talent): ", talent);
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
