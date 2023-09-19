import axios from "axios";

export const apiGetUserProfile = (userid, accounttype, callback) => {
  
  axios
    .get(`https://collabb-server-2.onrender.com/get-profile-details?userid=${userid}&accounttype=${accounttype}`)
    .then(res => {
      callback(res.data);
    })
    .catch(fail => {
      callback(fail);
    })
}