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

    function truncateDescription(description) {
      if (description) {
        if (description.length > 450) {
            let shortenedDescription = description.substring(0, description.indexOf(" ", 450)) + "..."
            return shortenedDescription;
        }
        return description;
      }
    }

    return (
        <div>
            {books.length ? (
                <div className="container text-center">
                  <div className="row justify-content-center">
                  {books.map(book => (

                    <div key={book.link} className="card bg-light m-1" style={{"width": "30%"}}>
                      <h3 className="card-title m-2"><strong>{book.title}</strong></h3>
                      <img src={book.image} className="card-img-top" alt="..." style={{"height": "28rem"}}></img>
                      <div className="card-body">
                        <p className="card-text">{truncateDescription(book.description)}</p>
                        <a className="btn btn-primary m-1" href={book.link}>Details</a>
                        <button className="btn btn-primary m-1" onClick={() => deleteBook(book._id)}>Remove</button>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              ) : (
                <h3>No books have been saved, try <a href="/search">searching</a> for a book to add!</h3>
              )}
        </div>
    )
}

export default Booklist;