import React, { useState } from "react";
import "./Pages/Details.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import "./Pages/Cart.css";
import "./Pages/Ribbon.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import BookContext from "../context/BookContext";

function WishlistComponent(props) {
    let navigate = useNavigate();
    const {cartItems, setCartItems, wishlistItems, setWishlist} = useContext(BookContext);

    function addW2C() {
        setCartItems((prevItems) => {
            return [...prevItems, props.id]
        });
        setWishlist((prevItems) => {
            return wishlistItems.filter((item, index) => {
                return item !== props.id
            })

        })
        navigate("/cart");
    }

    return <div className="detail-template cart-item box">
    <div class="ribbon"><span>Bookmarked</span></div>
    <div className="book-img">
        <img src={props.image} alt="details" />
    </div>
    <div className="details">
        <h3 className="book-t">{props.title} <span>(Paperback)</span></h3>
        <p className="book-a">{props.author}</p>
        <div className="review">
            <FontAwesomeIcon className="star" icon={faStar} />
            <p className="rating">4.5/5</p>
        </div>   

        <div className="pricing">
            <p className="new">{props.newPrice}</p>
            <p className="old">{props.oldPrice}</p>
        </div>

        <div className="availability">
            <p><span>Available</span> | Delivery within 2-3 business days</p>
        </div>

        <div className="btns">
            <button onClick={addW2C} className="buyNow btn buyNow-wishlist">Add to Cart</button>
        </div>
    </div>
</div>
}

export default WishlistComponent;