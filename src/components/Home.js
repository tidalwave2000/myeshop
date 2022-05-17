import React from "react";
import "../css/Home.css";
import homeScreen from "../images/online_shopping.jpg";
import Product from "../components/Product";

const Home = () => {
	return (
		<div>
			{/* Start setting up the home page */}
			<div className="home">
				<div className="home__container">
					<img src={homeScreen} alt="" className="home__image" />

					<div className="home__row">
                        <Product title="Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellant Fabric for Men and Women (Blue)"
                            price={11.96}
                            rating={5}
                            image="https://i5.walmartimages.com/asr/a7e42a24-0332-41e7-8960-7315a28487d8_1.66c1dd03ae62d9f19d72b35d5081cb31.jpeg"
						alt="product-pocketbook"
                        />
						<Product />
					</div>
					<div className="home__row">
						<Product />
						<Product />
						<Product />
					</div>
					<div className="home__row">
						<Product />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
