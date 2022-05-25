import React, { useState, useContext } from "react";
import Navigation from "../Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Details.css";
import Book from "../Book";
import { Navigate, useNavigate } from "react-router-dom";
import BookContext from "../../context/BookContext";
import Reviews from "../Reviews";

function Details(props) {
    let navigate = useNavigate();
    const {wishlistItems, setWishlist, cartItems, setCartItems} = useContext(BookContext);

    function addCart() {
        setCartItems((prevItems) => {
            return [...prevItems, props.id]
        } )
        navigate("/cart");
    }

    function addWishlist() {
        setWishlist((prevItems) => {
            return [...prevItems, props.id]
        } )
        navigate("/wishlist");
    }
    
    return <div>
    <div className="detail-template">
        <div className="book-img">
            <img src={props.image} alt="details" />
        </div>
        <div className="details">
            <h3 className="book-t">{props.title}<span>(Paperback)</span></h3>
            <p className="book-a">{props.author}</p>
            <div className="review">
                <FontAwesomeIcon className="star" icon={faStar} />
                <p className="rating">4.5/5 | <span>Write a Review</span></p>
            </div>   

            <div className="pricing">
                <p className="new">{props.newPrice}</p>
                <p className="old">{props.oldPrice}</p>
            </div>

            <div className="availability">
                <p><span>Available</span> | Delivery within 2-3 business days</p>
            </div>

            <div>
                <button onClick={addCart} className="addCart btn">Add to Cart</button>
                <button onClick={addWishlist} className="addWish btn">Add to Wishlist</button>
            </div>
        </div>
    </div>

        <div className="knowmore">
            <h3 className="aboutBook">About the Book</h3>
            <p>{props.about}</p>

        </div>

        <Reviews name="Aishwarya Parab" content="It's an eye opener. I think all women should have it as a mandatory read.
It could have been written in a slightly simpler language to make it accessible to more." />
        <Reviews name="Gaurang Navelkar" content="This book abounds with mind blowing theories but I particularly resonated with the idea that - due to mainstream media and our Capitalist society - anyone suffering from an eating disorder or obesity could consider themselves a political prisoner." />

        
    </div>
}

export default Details;