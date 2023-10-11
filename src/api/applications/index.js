import axios from "axios";

export function apiGetTalentApplications (userid, callback) {
    // axios.get(``)
    axios({
        baseURL: `https://collabb-server-2.onrender.com/`,
        url: "get-talent-applications",
        params: {
            userid
        }
    }).then(res => {
        callback(res.data);
    }).catch(fail => {
        console.info("fail: ", fail);
    })
}

export function apiGetAllAppliedTalents (applicants, callback) {
    axios({
        baseURL: `https://collabb-server-2.onrender.com/`,
        url: "get-all-users",
        method: "POST",
        data: {
            applicants: applicants,
        }
    }).then(res => {
        callback(res.data)
    }).catch(fail => {
        console.info("fail: ", fail);
    })
}

export function apiUpdateCurrentProfileStatus (talentid, status, callback) {
    axios
        .patch(`https://collabb-server-2.onrender.com/update-current-status?id=${talentid}`, { status })
        .then(res => callback(res.data))
        .catch(fail => console.info("fail: ", fail));
}