import axios from "axios";

export default {
    getScores: function () {
        return axios.get("/api/scores")
    },

    getScores: function (scoreData) {
        return axios.post("/api/scores", scoreData)
    },

    saveContactRequest: function (contactData) {
        return axios.post("/api/response", contactData);
    }
};