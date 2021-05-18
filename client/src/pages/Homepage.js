import React, { useState } from "react";
import {ResCard, SaveBtn} from "../components/ResCard";
import { Search, FormBtn } from "../components/Search";
import API from "../utils/API";
// import './style.css';

function Homepage() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks();
//   }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks(formObject.title)
    .then((res) => setBooks(res.data.items))
    .then(() => console.log(books))
    .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function saveBooks(bookData) {


    API.saveBook({bookData})
      .then(console.log(bookData))
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(formObject.title);
   loadBooks(formObject.title)
  }

  return (
    <div>
        <div className="container">
      <form>
        <Search
          onChange={handleInputChange}
          name="title"
          placeholder="Search here for a title or author"
        ></Search>

        <FormBtn disabled={!formObject.title} onClick={handleFormSubmit}>
     
        </FormBtn>
      </form>
      </div>
 
      <div className="container">
     
        {books.length ? (
          books.map((book) => (
            <div className="card rescard">
            <ResCard key={book.id} 
            title={book.volumeInfo.title}
            imageLink={book.volumeInfo.imageLinks.thumbnail}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            author={book.volumeInfo.authors}
            >
   

   
            </ResCard>
            
            <SaveBtn onClick={saveBooks(
            {title:book.volumeInfo.title,
         image:book.volumeInfo.imageLinks.thumbnail,
            description:book.volumeInfo.description,
            link:book.volumeInfo.infoLink,
            author:book.volumeInfo.authors})}></SaveBtn>
              </div>
          ))
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
}

export default Homepage;
