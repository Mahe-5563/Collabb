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

export const apiSendMessage = (messageBody, callback) => {
    axios({
        baseURL: "https://collabb-server-2.onrender.com",
        url: "/create-new-message",
        method: "POST",
        data: {
            ...messageBody,
        }
    }).then(res => {
        callback(res.data)
    }).catch(fail => {
        console.error("apiSendMessage (fail): ", fail);
    })
}

export const apiUpdateThreadStatus = (threadtitle, status, callback) => {
    axios({
        baseURL: "https://collabb-server-2.onrender.com",
        url: "/update-thread-status",
        method: "PATCH",
        data: {
            threadtitle,
            status
        }
    }).then(res => {
        callback(res.data);
    }).catch(fail => {
        console.error("apiUpdateThreadStatus (fail): ", fail);  
    })
}