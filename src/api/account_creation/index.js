import axios from "axios";

export const apiCheckForUser = (userDetails, callback) => {
    axios.get(`https://collabb-server.onrender.com/get-user-by-email?field_email=${userDetails.field_email}`).then(res => {
        callback(res.data);
    }).catch(fail => {
        console.error("fail: ", fail);
    });
}

export const apiCreateAccount = (userDetails, callback) => {
    console.info("userDetails: ", userDetails);
    axios
        .post('https://collabb-server.onrender.com/create-account', userDetails)
        .then(res => callback(res.data))
        .catch(fail => console.error("fail: ", fail));
}