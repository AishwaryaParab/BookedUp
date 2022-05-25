import React, { useState } from "react";
import "./Pages/Details.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import "./Pages/Cart.css";
import Payment from "./Payment";
import { Link, useNavigate } from "react-router-dom";

function CartComponent(props) {
    let navigate = useNavigate();
    const [count, setCount] = useState(1);

    const handleDec = () => {
        setCount(count == 1 ? 1 : count-1 );
    }

    const handleInc = () => {
        setCount(count+1);
    }

    function PayNow() {
        navigate("/payment", {state: {props}})
    }

    return <div className="detail-template cart-item">
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
            <FontAwesomeIcon className="tap" onClick={handleDec} icon={faSquareMinus} />
            {/* <button className="tap" onClick={handleDec}>-</button> */}
            <p>{count}</p>
            {/* <button className="tap" onClick={handleInc}>+</button> */}
            <FontAwesomeIcon className="tap" onClick={handleInc} icon={faSquarePlus} />
            
            <button onClick={PayNow} className="buyNow btn">Buy Now</button>
        </div>
    </div>

</div>

}

export default CartComponent;