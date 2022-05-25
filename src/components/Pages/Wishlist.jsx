import React, {useState} from "react";
import WishlistComponent from "../WishlistComponent";
import Navigation from "../Navigation";
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import BookContext from "../../context/BookContext";
import books from "../Books";
import awards from "../Awards";
import "./Wishlist.css";

function Wishlist() {
    const {wishlistItems, setWishlist} = useContext(BookContext);
    // console.log(cartItems)
    let newItems;

    {
        newItems = wishlistItems.filter((item, index) => {
            return wishlistItems.indexOf(item) === index;
        })
    }

    

    return <div>
        <Navigation />
        {   
            newItems.map((id) => {
                if(id <= 12) {
                    return books.map((item, index) => {
                    if(item.key === id) {
                    return <WishlistComponent id={item.key} image={item.image} title={item.title} author={item.author} 
                    newPrice={item.newPrice} oldPrice={item.oldPrice} />
                }
            })
                } else {
                    return awards.map((item, index) => {
                    if(item.key === id) {
                    return <WishlistComponent id={item.key} image={item.image} title={item.title} author={item.author} 
                    newPrice={item.newPrice} oldPrice={item.oldPrice} />
                }
            })  
                }
                
            })
            
    }
    </div>

}

export default Wishlist;