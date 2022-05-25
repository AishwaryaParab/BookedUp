import React, { useState } from 'react'
import logo from './logo.svg'
import logo1 from "../images/logo.png";
import "./Payment.css";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { faPlugCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import BookContext from '../context/BookContext';

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'


function Payment() {
    const {cartItems, setCartItems} = useContext(BookContext);

    let navigate = useNavigate();

    let location = useLocation();
    console.log(location.state.props)

    let book_image = location.state.props.image;
    let book_title = location.state.props.title;
    let book_id = location.state.props.id;

	const [name, setName] = useState('Aishwarya')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')  //load this url

		if (!res) {  //If the url doesn't load
			alert('Razorpay SDK failed to load. Please try again some time later.')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_yb8KwDH2c3z4kC' : 'PRODUCTION_KEY',  //only use the test key during development and not production
			currency: 'INR',
			amount: '500',
			order_id: data.id,
			name: 'BookedUp',
			description: 'Thank you for the purchase!',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
                navigate("/")
				console.log(response.razorpay_payment_id)
				console.log(response.razorpay_order_id)
				console.log(response.razorpay_signature)
                alert("Order confirmed. " + book_title + " successfully purchased.")
                console.log(book_id)
                setCartItems(() => {
                    return cartItems.filter((item, index) => {
                        return item != book_id
                    })
                })
			},
			prefill: {    //prefilled accounts/details
				name,
				// email: 'sdfdsjfh2@ndsfdf.com',
				// phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={book_image} className="App-logo" alt="logo" />
				<button
					className="App-link"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					Confirm your purchase
				</button>
			</header>
		</div>
	)
}

export default Payment;