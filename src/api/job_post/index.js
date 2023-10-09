import axios from "axios"

export const apiCreateJobPost = (jobPostDetails, callback) => {
    axios
        .post("https://collabb-server-2.onrender.com/create-job-post", jobPostDetails)
        .then(res => callback(res.data))
        .catch(fail => console.error("fail: ", fail));
}

export const apiGetJobPostsOnCategory = (category, callback) => {
    axios
        .get(`https://collabb-server-2.onrender.com/get-job-posts?category=${category}`)
        .then(res => callback(res.data))
        .catch(fail => console.error("fail: ", fail));
}

export const apiApplyForJobPost = (jobPostId, applicantDetails, callback) => {
    axios
        .patch(`https://collabb-server-2.onrender.com/update-job-post?id=${jobPostId}`, applicantDetails)
        .then(res => callback(res.data))
        .catch(fail => console.info("fail: ", fail));
}

export const apiGetClientJobPost = (userid, callback) => {
    axios
        .get(`https://collabb-server-2.onrender.com/get-client-job-posts?userid=${userid}`)
        .then(res => callback(res.data))
        .catch(fail => console.error("fail: ", fail));
}

export const apiUpdateJobStatus = (jobId, applicant, status, callback) => {
    axios
        .patch(`https://collabb-server-2.onrender.com/update-job-status?id=${jobId}`, { applicant, status })
        .then(res => { callback(res.data) })
        .catch(fail => console.error("fail: ", fail));
}

export const apiApplyForJob = (jobPostId, applicant, callback) => {
    axios
        .patch(`https://collabb-server-2.onrender.com/apply-for-job?id=${jobPostId}`, { applicant })
        .then(res => callback(res.data))
        .catch(fail => console.info("fail: ", fail));
}