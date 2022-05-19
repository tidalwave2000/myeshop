import React from 'react'
import "../css/CheckoutProduct.css";


const CheckoutProduct = () => {
  return (
		<div className="checkoutProduct">
			<img
				src="https://i5.walmartimages.com/asr/a7e42a24-0332-41e7-8960-7315a28487d8_1.66c1dd03ae62d9f19d72b35d5081cb31.jpeg"
				alt="checkout product"
				className="checkoutProduct__image"
			/>

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">
					Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
					Water Repellant Fabric for Men and Women (Blue)
				</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>40.89</strong>
				</p>
				<div className="checkoutProduct__rating">
					<p>⭐⭐⭐⭐</p>
				</div>
				<button>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;