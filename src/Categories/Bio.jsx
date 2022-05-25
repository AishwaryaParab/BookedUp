import React from "react";
import BookDetails from "../components/BookDetails";
import Trending from "../components/Trending";
import Navigation from "../components/Navigation";

function Bio() {
    return <div>
        <Navigation />
        <Trending title="Biographies & Memoirs" />
    </div>
}

export default Bio;