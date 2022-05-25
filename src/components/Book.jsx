import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Book.css";
import BookDetails from "./BookDetails";
import Details from "./Pages/Details";
import Trending from "./Trending";

function Book(props) {
    let book = props; //saving individual book details 
    let navigate = useNavigate();
    // let {title} = useParams();

    function handleBook() {
        let bookTitle = book.title;
        bookTitle = bookTitle.toLowerCase();
        bookTitle = bookTitle.split(" ").join("-");
        navigate(`/details/${bookTitle}`, {state: {book: book}});    //passing parameters while navigating
    }


    return <div onClick={handleBook} className="book-template">

        <div className="book-img">
            <img src={props.image} alt="book-cover"  />
        </div>
        <h3 className="book-title">{props.title}</h3>
        <p className="book-author">{props.author}</p>
        <div className="price">
            <p className="newPrice">{props.newPrice}</p>
            <p className="oldPrice">{props.oldPrice}</p>
        </div>
    </div>
}

export default Book;

