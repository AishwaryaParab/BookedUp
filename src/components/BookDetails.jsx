import {React} from "react";
import Details from "./Pages/Details";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Book from "./Book";

function BookDetails() {
    let location = useLocation();
    // {console.log(location)}
    let book = location.state.book;  //passing the object to book
    return <div>
        <Navigation />
        <Details about={book.about} id={book.id} image={book.image} title={book.title} author={book.author} newPrice={book.newPrice} oldPrice={book.oldPrice} />
    </div>
}

export default BookDetails;