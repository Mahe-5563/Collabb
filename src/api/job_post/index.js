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