import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, View, Dimensions } from "react-native";

import { colors } from "../../../css/colors";
import userImg1 from "../../../../assets/images/sliderimgs/slider1.png";
import userImg2 from "../../../../assets/images/sliderimgs/slider2.png";
import userImg3 from "../../../../assets/images/sliderimgs/slider3.png";
import userImg4 from "../../../../assets/images/sliderimgs/slider4.png";
import { profileSectionStyles } from "../../../css/interactables";

function ProfileHeader(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  let carousel = useRef();

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

  const imageArr = [
    {
      img: userImg1,
    },
    {
      img: userImg2,
    },
    {
      img: userImg3,
    },
    {
      img: userImg4,
    },
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          key={`key_${index}`}
          source={item.img}
          style={{
            width: "100%",
            height: 250,
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        layout="stack"
        ref={(ref) => (carousel = ref)}
        data={imageArr}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
}

export default ProfileHeader;
