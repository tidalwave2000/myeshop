import React from "react";
import "../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


const Checkout = () => {
   
    return (
			<div className="checkout">
				<div className="checkout__left">
					<img
						src="https://trackfield.vteximg.com.br/arquivos/ids/162269/banner_home_especial_1920x524.jpg"
						alt=""
						className="checkout__ad"
					/>

					<div className="">
						<h2 className="checkout__title">Your Shopping Basket</h2>
						<CheckoutProduct />
					</div>
				</div>
				<div className="checkout__right">
					<Subtotal />
				</div>
			</div>
		);

};

export default Checkout;