import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBookBookmark,
  faCaretDown,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import "../styles.css";
import Sliderdata from "./SliderData";
import {Link, useNavigate} from "react-router-dom";


function Navigation(props) {
    let navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar)


    const scrollDown = (ref) => {
        window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth" });
    };

    return <div>
        <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search by Title or Author..." />
        </div>
        <div className="buy">
          <div className="cart">
            <FontAwesomeIcon onClick={() => {navigate("/cart")}} className="icon" icon={faCartShopping} />
          </div>
          <div className="wishlist">
            <FontAwesomeIcon onClick={() => {navigate("/wishlist")}} className="icon" icon={faBookBookmark} />
          </div>
    </div>
    </div>

        <div className="links">
        <a className="categories">Categories</a>
        <FontAwesomeIcon onClick={handleSidebar} className="down-arrow" icon={faCaretDown} />
        <a onClick={() => {scrollDown(props.bestSection)}}>Best Sellers</a>
        <a onClick={() => {scrollDown(props.awardSection)}}>Award Winners</a>
        <a>Featured Authors</a>
        <a>Box Sets</a>
        <a>Stationery</a>
      </div>



        <div className={sidebar ? "menu active" : "menu"}>
          <ul onClick={handleSidebar}>
            {Sliderdata.map((item, index) => {
              return (
                <li className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })}
          </ul>

        </div>
    </div>
    

}

export default Navigation;