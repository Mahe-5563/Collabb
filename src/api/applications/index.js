import axios from "axios";

export default function apiGetTalentApplications (userid, callback) {
    // axios.get(``)
    axios({
        baseURL: `https://collabb-server-2.onrender.com/`,
        url: "get-talent-applications",
        params: {
            userid
        }
    }).then(res => {
        // console.info("res: ", res.data);
        callback(res.data);
    }).catch(fail => {
        console.info("fail: ", fail);
    })
}