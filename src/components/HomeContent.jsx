import React, { useRef } from "react";
import "../styles.css";
import Carousel from "./Carousel";
import data from "./data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import { useState } from "react";
import Trending from "./Trending";
import AwardWinners from "./AwardWinners";
import BestSellers from "./BestSellers";


function HomeContent() {
  const [currentSlide, setSlide] = useState(0);
  const len = data.length;

  function prevCar(){
    setSlide(currentSlide === 0 ? (len-1) : currentSlide-1);
  }

  function nextCar(){
    setSlide(currentSlide === (len-1) ? 0 : currentSlide+1);
  }

  const awardSection = useRef(null);
  const bestSection = useRef(null);

  return (
    <div className="home">
      <Navigation awardSection={awardSection} bestSection={bestSection} />
      <div className="carousel">
        <FontAwesomeIcon onClick={prevCar} className="left-arrow" icon={faCircleArrowLeft} />
        
        {
          data.map((item, index) => {
            {/* {index === currentSlide && <Carousel image={item.image} />} */}
            if (index === currentSlide) {
              return <div>
                <Carousel id={index} image={item.image} />
              </div>
            }
          }) 
        } 

        <div className="dot-box">
          {
            data.map((item, index) => {
              return <div onClick={() => setSlide(index)} style={{backgroundColor: index===currentSlide && "#FED005"}} className="dots"></div>
            })
          }
        </div>

        <FontAwesomeIcon onClick={nextCar} className="right-arrow" icon={faCircleArrowRight} />
      </div>
      <Trending title="New Arrivals" />

      <AwardWinners awardSection={awardSection} title="Award Winners" />
      <BestSellers bestSection={bestSection} title="Best Sellers" />
    </div>
  );
}

export default HomeContent;
