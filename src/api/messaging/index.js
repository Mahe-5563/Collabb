import axios from "axios";


export const getUserMessages = (userid, callback) => {

    axios({
        baseURL: "https://collabb-server-2.onrender.com",
        url: "/get-users-messages",
        method: "GET",
        params: { userid }
    }).then(res => {
        callback(res.data);
    }).catch(fail => {
        console.error("Fail: ", fail);
        // callback(fail);
    })
}