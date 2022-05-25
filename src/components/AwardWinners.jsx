import React from "react";
import awards from "./Awards.js";
import "../styles.css";
import Book from "./Book";

function AwardWinners(props) {


    return <div ref={props.awardSection}>
            <div className="arrival-container">
          <h3 className="arrivals">{props.title}</h3>
        </div>
        <div className="trending">
          {awards.map((item, index) => {
            return (
              <Book
                id={item.key}
                image={item.image}
                title={item.title}
                author={item.author}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                about={item.about}
              />
            );
          })}
        </div>
    </div>
}
  
export default AwardWinners;