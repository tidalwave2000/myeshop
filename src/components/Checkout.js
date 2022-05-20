import React from "react";
import "../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";



const Checkout = () => {
	const [{ basket }, dispatch] = useStateValue();
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
					{/* use map to search thru the array and display all items in the array */}
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="checkout__right">
					<Subtotal />
				</div>
			</div>
		);

};

export default Checkout;