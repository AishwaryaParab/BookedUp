import React from "react";
import books from "./Books";
import Book from "./Book";
import "./Book.css";

function Trending(props) {
  return (
    <div>
      <div className="arrival-container">
        <h3 className="arrivals">{props.title}</h3>
      </div>
      <div className="trending">
        {books.map((item, index) => {
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
  );
}

export default Trending;
