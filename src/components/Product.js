import React from "react";
import "../css/Product.css";

//pass props id, title,price,rating, and image to Product function
const Product = ({id, title, price, rating, image}) => {
	return (
		<div>
			{/* Start setting up the home product sections */}
			<div className="product">
				<div className="product__info">
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
				<button>Add to Basket</button>
			</div>
		</div>
	);
};

export default Product;
