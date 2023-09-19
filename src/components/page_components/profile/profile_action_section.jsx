import React, { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, ToastAndroid } from "react-native";
import {
  faBan,
  faEuro,
  faFileCirclePlus,
  faMessage,
  faPlaneDeparture,
  faStar,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { colors } from "../../../css/colors";
import {
  appFontFamily,
  appFontFamilyBold,
  setMargin,
  textContentSize,
  textHeaders,
  textLabel,
} from "../../../css/common";
import { multiSelectStyles, profileSectionStyles, summaryCard } from "../../../css/interactables";
import CTAButton from "../../cta_button";
import DropdownComponent from "../../dropdown";

function FollowersSection() {
  return (
    <View style={[profileSectionStyles.followersSection, setMargin(20).setMarginVertical]}>
      <Text
        style={{
          fontSize: textHeaders,
          fontFamily: appFontFamily,
        }}
      >
        9k
      </Text>
      <Text
        style={{
          fontSize: textContentSize,
          fontFamily: appFontFamily,
        }}
      >
        Followers
      </Text>
    </View>
  );
}

function ActionIconSection() {
  return (
    <View style={[profileSectionStyles.actionIconSection, setMargin(20).setMarginVertical]}>
      <Pressable
        style={[profileSectionStyles.actionIcons]}
        onPress={() => ToastAndroid.show("Follow Clicked", 2000)}
      >
        <FontAwesomeIcon icon={faUserPlus} size={40} />
        <Text style={[profileSectionStyles.actionIconTitle]}>Follow</Text>
      </Pressable>
      <Pressable
        style={[profileSectionStyles.actionIcons]}
        onPress={() => ToastAndroid.show("Add Note Clicked", 2000)}
      >
        <FontAwesomeIcon icon={faFileCirclePlus} size={40} />
        <Text style={[profileSectionStyles.actionIconTitle]}>Add Note</Text>
      </Pressable>
      <Pressable
        style={[profileSectionStyles.actionIcons]}
        onPress={() => ToastAndroid.show("Favourite Clicked", 2000)}
      >
        <FontAwesomeIcon icon={faStar} size={40} />
        <Text style={[profileSectionStyles.actionIconTitle]}>Favourite</Text>
      </Pressable>
      <Pressable
        style={[profileSectionStyles.actionIcons]}
        onPress={() => ToastAndroid.show("Contact clicked", 2000)}
      >
        <FontAwesomeIcon icon={faMessage} size={40} />
        <Text style={[profileSectionStyles.actionIconTitle]}>Contact</Text>
      </Pressable>
    </View>
  );
}

function TalentRateXPSection(props) {
  return (
    <View style={[profileSectionStyles.talentRateXPSectionBox, setMargin(10).setMarginVertical]}>
      <View style={profileSectionStyles.talentRateXPSection}>
        <Text>Rate</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <FontAwesomeIcon
            icon={faEuro}
            size={22}
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{
              fontSize: textHeaders,
              marginRight: 10,
            }}
          >
            {props.userProfile.rate}
          </Text>
          <Text
            style={{
              fontSize: textLabel,
              fontFamily: appFontFamily,
              alignSelf: "center",
            }}
          >
            {`/${props.userProfile.paytype}`}
          </Text>
        </View>
      </View>
      <View
        style={{ borderRightWidth: 1, borderRightColor: colors.grey_color }}
      />
      <View style={profileSectionStyles.talentRateXPSection}>
        <Text>Experience</Text>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: textContentSize,
              fontFamily: appFontFamily,
              alignSelf: "center",
            }}
          >
            {props.userProfile.experience?.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
}

function AcceptTalentSection() {
  return (
    <View style={[setMargin(20).setMargin]}>
      <CTAButton 
        dark
        title={"Accept"}
        onPress={() => { ToastAndroid.show("Accepted the talent description", 2000) }}
      />
    </View>
  )
}

function StatusDropdownSection () {
  const [currentStatus, setCurrentStatus] = useState();

  const items = [
    {
      id: 1,
      label: "Available for work",
      value: "Available for work",
      icon: faCircleCheck,
      color: colors.success_color
    },
    {
      id: 2,
      label: "Working on another task",
      value: "Working on another task",
      icon: faBan,
      color: colors.danger_color
    },
    {
      id: 3,
      label: "On Vacation",
      value: "On Vacation",
      icon: faPlaneDeparture,
      color: colors.warning_color
    }
  ];

  return (
    <View style={[setMargin(20).setMarginHorizontal, setMargin(10).setMarginBottom]}>
      {/* Fix the colors for the prompt */}
      <DropdownComponent
        prompt={currentStatus || "Update your status"}
        items={items}
        stateValue={currentStatus}
        onValueChange={(value) => { setCurrentStatus(value) }}
      />
      <Text
        style={{
          fontFamily: appFontFamily,
          color: colors.blue_light,
          paddingHorizontal: 10,
          marginTop: 5,
        }}
      >
        Update your status everytime you begin or complete a task. Your status helps the Client know what you are up to.
      </Text>
    </View>
  )
}

function ProfileDetailsSection (props) {
  return (
    <View>
      <View>
        <Text style={summaryCard.textTitle}>Skills:</Text>
        <View style={[multiSelectStyles.selectedOptions, setMargin(10).setMarginVertical]}>
          {props.userProfile.skills?.map((skill, index) => (
            <Text 
              key={`summary_${index}`}
              style={summaryCard.chip}
            >
              {skill.label}
            </Text>
          ))}
        </View>
      </View>
      <View>
        <Text style={summaryCard.textTitle}>Description:</Text>
        <View style={[setMargin(10).setMarginVertical]}>
          <Text style={summaryCard.textContent}>
            {/* {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, mi vel imperdiet mattis, nulla libero sagittis enim, a elementum felis nulla at nisl. Vivamus mauris dui, fermentum quis dui ac, cursus egestas ipsum. In eget fringilla velit. Nullam tortor lectus, condimentum at accumsan sit amet, congue at massa. Pellentesque fringilla mi sit amet augue vulputate aliquam. Maecenas sagittis sollicitudin facilisis. Sed semper non metus nec varius. Quisque mollis, odio vel elementum feugiat, erat justo auctor sapien, a tincidunt est nulla quis nulla. Pellentesque sed nisl sapien. Curabitur dapibus, orci at tempus pretium, felis tellus vehicula orci, non molestie turpis nulla eu orci. Integer placerat in tellus id ornare. Proin venenatis tellus quis felis tristique sollicitudin. In scelerisque luctus neque sit amet pharetra."} */}
            {props.userProfile.description}
          </Text>
        </View>
      </View>
    </View>
  )
}

function RatingsReviewsSection () {
  return (
    <View>
      <View style={[summaryCard.cardBox]}>
        <Text style={summaryCard.textTitle}>Ratings</Text>
        <View style={[setMargin(10).setMarginTop, { display: "flex", flexDirection: "row" }]}>
          <FontAwesomeIcon icon={faStar} size={50} />
          <FontAwesomeIcon icon={faStar} size={50} />
          <FontAwesomeIcon icon={faStar} size={50} />
          <FontAwesomeIcon icon={faStar} size={50} />
          <FontAwesomeIcon icon={faStar} size={50} />
        </View>
      </View>
      <View style={[summaryCard.cardBox]}>
        <Text style={summaryCard.textTitle}>Reviews</Text>
        <View style={[setMargin(10).setMarginTop]}>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.secondary_color_medium,
              padding: 15,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            <Text 
              style={{ 
                fontSize: 18, 
                fontFamily: appFontFamily,
                textAlign: "center", 
                fontStyle: "italic"
              }}
            >
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, mi vel imperdiet mattis, nulla libero sagittis enim, a elementum felis nulla at nisl."}
            </Text>
            <Text 
              style={{ 
                fontSize: 20, 
                fontFamily: appFontFamily, 
                textAlign: "center",
                marginTop: 20,
              }}
            >
              David Robert Joseph Beckham
            </Text>
            <Text 
              style={{ 
                fontSize: 18, 
                fontFamily: appFontFamily, 
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Profession
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.secondary_color_medium,
              padding: 15,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            <Text 
              style={{ 
                fontSize: 18, 
                fontFamily: appFontFamily,
                textAlign: "center", 
                fontStyle: "italic"
              }}
            >
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, mi vel imperdiet mattis, nulla libero sagittis enim, a elementum felis nulla at nisl."}
            </Text>
            <Text 
              style={{ 
                fontSize: 20, 
                fontFamily: appFontFamily, 
                textAlign: "center",
                marginTop: 20,
              }}
            >
              David Robert Joseph Beckham
            </Text>
            <Text 
              style={{ 
                fontSize: 18, 
                fontFamily: appFontFamily, 
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Profession
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

function ProfileActionSection(props) {
  const { currentUser, userProfile } = props;
  console.info("userProfile: ", userProfile);
  console.info("currentUser: ", currentUser);
  return (
    <View>
      
      <FollowersSection />
      {/* <AcceptTalentSection /> */}
      {/* <StatusDropdownSection /> */}
      <TalentRateXPSection 
        userProfile={userProfile}
      />
      {/* <ActionIconSection /> */}

      <View
        style={[summaryCard.cardBox]}
      >
        <ProfileDetailsSection
          userProfile={userProfile}
        />
      </View>
      <View>
        <RatingsReviewsSection />
      </View>
    </View>
  );
}

export default ProfileActionSection;
