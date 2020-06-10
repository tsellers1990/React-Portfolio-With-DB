import axios from "axios";

export default {
  // Gets all books
  getResponse: function() {
    return axios.get("/api/response");
  },
  // Gets the book with the given id
  getResponse: function(id) {
    return axios.get("/api/responses/" + id);
  },
  // Deletes the response with the given id
  deleteResponse: function(id) {
    return axios.delete("/api/responses/" + id);
  },
  // Saves a response to the database
  saveResponse: function(responseData) {
    return axios.post("/api/responses", responseData);
  }
};
