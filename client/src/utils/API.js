import axios from "axios";

export default {
    saveContactRequest: function (contactData) {
        return axios.post("/api/response", contactData);
    }
};