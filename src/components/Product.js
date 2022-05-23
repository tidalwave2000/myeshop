import React from "react";
import "../css/Product.css";
import { useStateValue } from "./StateProvider";

//pass props id, title,price,rating, and image to Product function
const Product = ({ id, title, price, rating, image }) => {
	const [state, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div>
			{/* Start setting up the home product sections */}
			<div className="product">
				<div key={id} className="product__info">
					<p>{title}</p>
					<p className="product__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					{/* Start setting up the product ratings */}
					<div className="product__rating">
						{Array(rating)
							.fill()
							.map((_, i) => (
								<p>⭐</p>
							))}
					</div>
				</div>
				<img src={image} alt="product-pocketbook" />
				<button onClick={addToBasket}>Add to Basket</button>
			</div>
		</div>
	);
};

export default Product;
