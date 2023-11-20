import { ToastAndroid } from "react-native";
import { months } from "../json/common";
import { apiGetUserDetailsById } from "../api/account_creation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSelectedDate = (date) => {
  const fullDate = new Date(date);
  if (!isNaN(fullDate)) {
    const dat = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    return `${(fullDate.getDate() < 10 ? "0" : "") + dat}/${
      (fullDate.getMonth() + 1 < 10 ? "0" : "") + month
    }/${year}`;
  } else {
    return "";
  }
};


export const toastMessage = (message, duration = 5000) => {
    ToastAndroid.show(message, duration);
}

export const getDate = (date) => {
  let fullDate;
  if (date) {
    fullDate = `${(new Date(date).getDate() < 10 && new Date(date).getDate() > 0 ? "0" : "") + new Date(date).getDate()}/${(new Date(date).getMonth() + 1 < 10 ? "0" : "") + (new Date(date).getMonth() + 1)}/${new Date(date).getFullYear()}`;
  }

  return fullDate;
}

export const getTime = (date) => {
  const hours = new Date(Number(date)).getHours();
  const minutes = new Date(Number(date)).getMinutes();

  return `${hours}:${minutes}`;
};

export const getShortDate = (date) => {
  const dat = new Date(Number(date)).getDate();
  const month = months.filter(
    (month) => month.id == new Date(Number(date)).getMonth()
  )[0].shortMonth;
  return `${month} ${dat}`;
};

export const checkForUser = async (navigation, callback) => {
  const userId =  await AsyncStorage.getItem("userId");
    console.info(userId);
    if(userId) {
      apiGetUserDetailsById(userId, (response) => {
        const userType = response?.res?.usertype;
        console.info(userType);
        if(userType == "client"){
          navigation.navigate(
            "client_home_page",
            {
              userDetails: response?.res
            }
          );
          callback && callback();
        } else if (userType == "talent") {
          navigation.navigate(
            "talent_home_page",
            {
              userDetails: response?.res
            }
          );
          callback && callback();
        }
      })
    }
}