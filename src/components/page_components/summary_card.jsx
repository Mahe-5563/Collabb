import { View, Text } from "react-native";

import {
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

function SummaryCard(props) {
  const { summaryObj, summaryKeys, summaryTitle } = props;

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
          // console.info("key: ", summaryItem.key);
          // console.info("data: ", data);
          return (
            <View key={`summary_${summaryItem.id}`}>
              {data && 
                <View
                  style={[setMargin(10).setMarginVertical]}
                >
                  <Text style={[summaryCard.textTitle]}>{summaryItem.name}</Text>
                  {summaryItem.key == "jd_startdate" ||
                  summaryItem.key == "jd_enddate" ? (
                    <Text style={summaryCard.textContent}>
                      {getSelectedDate(data)}
                    </Text>
                  ) : summaryItem.key == "jd_skills" ? (
                    <View style={multiSelectStyles.selectedOptions}>
                      {data.map((datum) => (
                        <Text key={datum.id} style={summaryCard.chip}>
                          {datum.label}
                        </Text>
                      ))}
                    </View>
                  ) : (
                    <Text style={summaryCard.textContent}>{data}</Text>
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
