import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Reviews(props) {
    return <div className="knowmore">
    {props.name === "Aishwarya Parab" && <h3 className="bookreview">Reviews</h3>}
    <div className="bookreview-section">
        <FontAwesomeIcon className="user" icon={faCircleUser} />
        <div className="review-name">{props.name}</div>
    </div>
    <p>{props.content}</p>

</div>
}

export default Reviews;