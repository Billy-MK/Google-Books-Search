import React from "react";
import Booklist from "../components/Booklist";

function Saved() {
    return (
        <div className="container border">
            <div className="row m-3">
                <h4>Saved Books</h4>
            </div>
            <div className="row m-3">
                <Booklist />
            </div>
        </div>
    )
}

export default Saved;