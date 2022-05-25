import React, {useState} from "react";
import CartComponent from "../CartComponent";
import Navigation from "../Navigation";
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import BookContext from "../../context/BookContext";
import books from "../Books";
import awards from "../Awards";

function Cart() {
    const {cartItems, setCartItems} = useContext(BookContext);
    // console.log(cartItems)
    let newItems;

    {
        newItems = cartItems.filter((item, index) => {
            return cartItems.indexOf(item) === index;
        })
        // console.log(newItems)
    }


    return <div>
        <Navigation />
        {   
            newItems.map((id) => {
                if (id <= 12){
                    return books.map((item, index) => {
                    if(item.key === id) {
                    return <CartComponent id={id} image={item.image} title={item.title} author={item.author} 
                    newPrice={item.newPrice} oldPrice={item.oldPrice} />
                }
            })
                } else{
                    return awards.map((item, index) => {
                    if(item.key === id) {
                    return <CartComponent id={id} image={item.image} title={item.title} author={item.author} 
                    newPrice={item.newPrice} oldPrice={item.oldPrice} />
                }
            })
                        
                }
            })
            
    }
    </div>

}

export default Cart;