import React from "react";
import "../css/Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";

const Product = () => {
    return (
			<div>
				{/* Start setting up the home product sections */}
				<div className="product">
					<div className="product__info">
						<p>Title</p>
						<p className="product__price">$30</p>
						<div className="product__rating">
							<StarRateIcon />
							<StarRateIcon />
							<StarRateIcon />
							<StarRateIcon />
						</div>
					</div>
					<img
						src="https://i5.walmartimages.com/asr/a7e42a24-0332-41e7-8960-7315a28487d8_1.66c1dd03ae62d9f19d72b35d5081cb31.jpeg"
						alt="product-pocketbook"
					/>
					<button>Add to Basket</button>
				</div>
			</div>
		);
};

export default Product;

