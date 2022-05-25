import React from "react";
import BookDetails from "../components/BookDetails";
import Trending from "../components/Trending";
import Navigation from "../components/Navigation";

function NonFiction() {
    return <div>
        <Navigation />
        <Trending title="Non-Fiction Books" />
    </div>
}

export default NonFiction;