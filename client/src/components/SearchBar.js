import React, { useState, useEffect } from 'react';
import API from '../utils/API'

function SearchBar() {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function displayBooks(books) {
        // Add this function later
        console.log("Books displayed on screen: " + books);
    }

    function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
        API.searchBooks(formObject.title)
        .then(res => displayBooks(res))
        .catch(err => console.log(err));
    }
    };

    return (
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
    )
}

export default SearchBar;