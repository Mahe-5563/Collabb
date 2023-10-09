import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEuroSign,
  faList,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import {
  applicationCard,
  multiSelectStyles,
  profileSectionStyles,
  summaryCard,
  talentApplyStyles,
} from "../../../css/interactables";
import {
  appFontFamily,
  setMargin,
  textContentSize,
  textHeaders,
  textLabel,
  textSize,
  textSubheaders,
} from "../../../css/common";
import { colors } from "../../../css/colors";

function TalentApplicationCard(props) {
  const { jobDetails } = props;
  const [applicationDetail, setApplicationDetail] = useState();
  const [jobStatus, setJobStatus] = useState();

  useEffect(() => {
    let userKey = Object.keys(props)[0];
    setApplicationDetail(props[userKey]);
  }, []);

  useEffect(() => {
    if(jobDetails && applicationDetail)
      setJobStatus(jobDetails?.applicants?.filter(applicant => applicant.userid == applicationDetail.userDetail._id)[0]?.status);
  }, [jobDetails, applicationDetail])

  return (
    <>
      <View
        style={[talentApplyStyles.cardContainer, setMargin(20).setMarginBottom]}
      >
        {jobStatus != "Pending" && 
          <View
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              backgroundColor: 
                jobStatus == "Accept" ? 
                  "rgba(46, 198, 52, 0.7)" 
                  : jobStatus == "Reject" && 
                    "rgb(202, 33, 33, 0.7)",
              paddingVertical: 3,
              paddingHorizontal: 7,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: colors.white, fontFamily: appFontFamily }}> {jobStatus} </Text>
          </View>
        }
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: applicationDetail?.userDetail?.profileUri }}
            style={applicationCard.applicationProfileImg}
          />
          <View
            style={{
              marginTop: 10,
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontSize: textHeaders,
                fontFamily: appFontFamily,
                paddingRight: 80,
              }}
              numberOfLines={2}
            >
              {applicationDetail?.userDetail?.firstName}{" "}
              {applicationDetail?.userDetail?.lastName}
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: textSize,
              }}
            >
              {applicationDetail?.profileDetail?.subcategory}
            </Text>
          </View>
        </View>
        <View
          style={[ setMargin(20).setMarginTop ]}
        >
          <Text
            style={{
              fontSize: textSubheaders,
            }}
            numberOfLines={2}
          >
            {applicationDetail?.profileDetail?.description}
          </Text>
          <View
            style={[
              multiSelectStyles.selectedOptions,
              setMargin(20).setMarginTop,
            ]}
          >
            {applicationDetail?.profileDetail?.skills?.map((datum) => (
              <Text key={datum.id} style={summaryCard.chip}>
                {datum.label}
              </Text>
            ))}
          </View>
          <View
            style={[
              profileSectionStyles.talentRateXPSectionBox,
              setMargin(20).setMarginTop,
              setMargin(0).setMarginRight,
              setMargin(0).setMarginLeft,
            ]}
          >
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
                  icon={faEuroSign}
                  size={22}
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{
                    fontSize: textHeaders,
                    marginRight: 10,
                  }}
                >
                  {applicationDetail?.profileDetail?.rate}
                </Text>
                <Text
                  style={{
                    fontSize: textLabel,
                    fontFamily: appFontFamily,
                    alignSelf: "center",
                  }}
                >
                  {`/${applicationDetail?.profileDetail?.paytype}`}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: colors.grey_color,
              }}
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
                  {applicationDetail?.profileDetail?.experience?.toUpperCase()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default TalentApplicationCard;
