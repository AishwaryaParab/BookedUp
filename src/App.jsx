import React from "react";
import HomeContent from "./components/HomeContent";
import BookDetails from "./components/BookDetails";
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Fiction from "./Categories/Fiction";
import NonFiction from "./Categories/NonFiction";
import Bio from "./Categories/Bio";
import Lifestyle from "./Categories/Lifestyle";
import History from "./Categories/History";
import Tech from "./Categories/Tech";
import ErrorPage from "./components/Pages/ErrorPage";
import "./styles.css";
import CartComponent from "./components/CartComponent";
import Cart from "./components/Pages/Cart";
import BookState from "./context/BookState";
import Wishlist from "./components/Pages/Wishlist";
import AwardWinners from "./components/AwardWinners";
import ScrollToTop from "./components/ScrollToTop";
import Payment from "./components/Payment";


function App(){
    return <div>
        <Router>
            <BookState>
            <ScrollToTop />
            <Routes>
                <Route path="/BookedUp" element={<HomeContent />} />
                <Route path="/fiction" element={<Fiction />} />
                <Route path="/non-fiction" element={<NonFiction />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/history" element={<History />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/lifestyle" element={<Lifestyle />} />
                <Route path="/details/:title" element={<BookDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/award-winners" element={<AwardWinners />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            </BookState>
        </Router>  
    </div>
}

export default App;