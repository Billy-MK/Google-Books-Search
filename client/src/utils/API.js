import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Gets all books
    getBooks: function() {
      return axios.get("/api/books");
    },

    deleteBook: function(id) {
      return axios.delete("/api/books/" + id)
    },

    searchBooks: function(searchTerm) {
      return axios.get("/api/googlebooks/")
    }
}