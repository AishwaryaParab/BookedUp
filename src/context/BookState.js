import BookContext from "./BookContext";
import { useState } from "react";

const BookState = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlist] = useState([]);
    return <BookContext.Provider value={{wishlistItems, setWishlist, cartItems, setCartItems}}>
            {props.children}
        </BookContext.Provider>    
}

export default BookState;