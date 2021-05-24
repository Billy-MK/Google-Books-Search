import React from "react";
import SearchBar from "../components/SearchBar";

function Search() {
    return (
        <div className="container border">
            <div className="row m-3">
                <h4>Search for a Book</h4>
            </div>
            <div className="row m-3"> 
                <SearchBar />
            </div>
        </div>
    )
}

export default Search;