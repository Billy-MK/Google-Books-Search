import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Booklist() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
      }, [])

    function loadBooks() {
      API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
    }
    
    function deleteBook(id) {
      API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    return (
        <div>
            {books.length ? (
                <ul>
                  {books.map(book => (
                    <li key={book._id} style={{"clear": "both"}}>
                      <strong>
                        {book.title} by {book.authors}
                      </strong>
                      <a href={book.link} style={{"float": "right"}}>View</a>
                      <button style={{"float": "right"}} onClick={() => deleteBook(book._id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <h3>No books have been saved, try <a href="/search">searching</a> for a book to add!</h3>
              )}
        </div>
    )
}

export default Booklist;