import { ToastAndroid } from "react-native";

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