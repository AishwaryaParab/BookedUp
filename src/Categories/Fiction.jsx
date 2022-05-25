import React from "react";
import BookDetails from "../components/BookDetails";
import Trending from "../components/Trending";
import Navigation from "../components/Navigation";

function Fiction() {
    return <div>
        <Navigation />
        <Trending title="Fiction Books" />
    </div>
}

export default Fiction;