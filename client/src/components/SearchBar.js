import React, { useState, useEffect } from 'react';
import API from '../utils/API';

function SearchBar() {
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    function loadBooks() {
        if (formObject.title) {
            API.searchBooks(formObject.title)
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
        }
    }

    function saveBook(title, authors, description, image, link) {
        API.saveBook({
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
    
    function handleFormSubmit(event) {
        event.preventDefault();
        loadBooks()
        console.log(books)
        };

    return (
        <>
        <form>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10">
                        <input className="form control" onChange={handleInputChange} style={{"width": "100%", "height":"100%"}} name="title"></input>
                    </div>
                    <div className="col-sm-2">
                        <button onClick={handleFormSubmit} className="btn btn-success">Search</button>
                    </div>
                </div>
            </div>
        </form>
        <div>
            {books.totalItems > 0 ? (
                <div className="container text-center">
                <div className="row justify-content-center">
                {books.items.map(book => (

                    <div key={book.id} className="card bg-light m-1" style={{"width": "30%"}}>
                      <h3 className="card-title m-2"><strong>{book.volumeInfo.title}</strong></h3>
                      {book.volumeInfo.imageLinks ? (
                          <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="..." style={{"height": "28rem"}}></img>
                      ) : (
                          <div></div>
                      )}
                      <div className="card-body">
                        <p className="card-text">{book.volumeInfo.description}</p>
                        <a className="btn btn-primary m-1" href={book.infoLink}>Details</a>
                        <button className="btn btn-primary m-1" onClick={() => saveBook(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.infoLink)}>Save</button>
                      </div>
                    </div>
                  ))}
                  </div>
                  </div>
            ) : (
                <div className="text-center m-5">
                    No results to display
                </div>
            )}
        </div>
        </>
    )
}

export default SearchBar;