import axios from "axios";

export default {
  // Gets all books
  getBooks: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" +search+"&key=AIzaSyB5txYIT-JDscslwZuBHw0NbgQIf7Qear0");
  },
  // Gets the book with the given id

  // Deletes the book with the given id
  getSaved: function() {
    return axios.get("/api/books/");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("api/books", bookData);
  }
};
