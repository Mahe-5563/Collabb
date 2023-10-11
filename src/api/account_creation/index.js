import axios from "axios";

export const apiCheckForUser = (userDetails, callback) => {
    axios.get(`https://collabb-server-2.onrender.com/get-user-by-email?field_email=${userDetails.field_email}`).then(res => {
        callback(res.data);
    }).catch(fail => {
        console.error("fail: ", fail);
    });
}

export const apiCreateAccount = (userDetails, callback) => {
    axios
        .post('https://collabb-server-2.onrender.com/create-account', userDetails)
        .then(res => callback(res.data))
        .catch(fail => console.error("fail: ", fail));
}

export const apiGetUserDetailsById = (userId, callback) => {
    axios
        .get(`https://collabb-server-2.onrender.com/get-user-by-id?id=${userId}`)
        .then(res => callback(res.data))
        .catch(fail => console.error("fail: ", fail));
}