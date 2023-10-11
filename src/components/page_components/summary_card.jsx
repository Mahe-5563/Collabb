import { useEffect, useState } from "react"; 
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import {
  appFontFamily,
  customValue,
  fontFamily,
  fontSize,
  setMargin,
  setPadding,
  textHeaders,
  textSize,
  textSubheaders,
} from "../../css/common";
import {
  ctaButtons,
  multiSelectStyles,
  summaryCard,
} from "../../css/interactables";
import { getSelectedDate } from "../../js/common";
import { colors } from "../../css/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function SummaryCard(props) {
  const { summaryObj, summaryKeys, summaryTitle } = props;
  const maxLim = 5;
  const [showItems, setShowItems] = useState(5);

  useEffect(() => {
    if(summaryObj?.jd_skills?.length > 0) {
      if(summaryObj?.jd_skills?.length > 5) {
        setShowItems(5);
      } else {
        setShowItems(summaryObj?.jd_skills?.length);
      }
    }
  }, [summaryObj])
  

  const cardTitle = [
    setPadding(20).setPaddingHorizontal,
    fontFamily().setFontFamily,
    fontSize(textSubheaders).setFontSize,
    customValue("fontWeight", "bold").setCustomValue,
    setMargin(30).setMarginTop,
  ];
  return (
    <>
      <Text style={cardTitle}>{summaryTitle}</Text>
      <View style={[summaryCard.cardBox]}>
        {summaryKeys?.map((summaryItem) => {
          const data = summaryObj[summaryItem.key];
          return (
            <View key={`summary_${summaryItem.id}`}>
              {data && 
                <View
                  style={[setMargin(10).setMarginVertical]}
                >
                  <Text style={[summaryCard.textContent]}>{summaryItem.name}</Text>
                  {summaryItem.key == "jd_startdate" ||
                  summaryItem.key == "jd_enddate" ? (
                    <Text style={summaryCard.textTitle}>
                      {getSelectedDate(data)}
                    </Text>
                  ) : summaryItem.key == "jd_skills" ? (
                    <View style={multiSelectStyles.selectedOptions}>
                      {data.slice(0, showItems).map((datum) => (
                        <Text key={datum.id} style={summaryCard.chip}>
                          {datum.label}
                        </Text>
                      ))}
                      {data.length > 5 &&
                        <TouchableOpacity
                          activeOpacity={0.5}
                          style={[ 
                            summaryCard.chipBtn,
                            {
                              display: "flex",
                              flexDirection: "row",
                            }
                          ]}
                          onPress={() => {
                            if(showItems > 5) {
                              setShowItems(5);
                            } else if (showItems <=5 ) {
                              setShowItems(summaryObj?.jd_skills?.length)
                            }
                          }}
                        >
                          <FontAwesomeIcon 
                            icon={showItems > 5 ? faMinus : faPlus} 
                            size={textSize} 
                            style={{ marginRight: 10, }} 
                            color={colors.white} 
                          />
                          <Text
                            style={{ fontFamily: appFontFamily, fontSize: textSize, color: colors.white }}
                          >
                            {showItems > 5 ? "Show Less" : `${data.length - 5} More`}
                          </Text>
                        </TouchableOpacity>
                      }
                    </View>
                  ) : (
                    <Text style={summaryCard.textTitle}>{data}</Text>
                  )}
                </View>
              }
            </View>
          );
        })}
      </View>
    </>
  );
}

export default SummaryCard;
