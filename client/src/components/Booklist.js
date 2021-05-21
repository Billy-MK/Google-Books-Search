import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Booklist() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        API.getBooks()
        .then(res => 
          setBooks(res.data)
        )
        .catch(err => console.log(err));
      }, [])

    return (
        <div>
            {books.length ? (
                <ul>
                  {books.map(book => (
                    <li key={book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                    </li>
                  ))}
                </ul>
              ) : (
                <h3>No books have been saved</h3>
              )}
        </div>
    )
}

export default Booklist;