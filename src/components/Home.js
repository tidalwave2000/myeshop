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
						<Product
							id="10001"
							title="Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellant Fabric for Men and Women (Blue)"
							price={40.89}
							rating={4}
							image="https://i5.walmartimages.com/asr/a7e42a24-0332-41e7-8960-7315a28487d8_1.66c1dd03ae62d9f19d72b35d5081cb31.jpeg"
							alt="product-pocketbook"
						/>
						<Product
							id="10035"
							title="CASSIA structured weekender bag for women | eco and vegan bags"
							price={229.89}
							rating={5}
							image="https://prod-cdn-07.storenvy.com/product_photos/46063510/Cassia_20Weekender_20in_20Stone_20Side_20Angle_original.jpg"
							alt="product-pocketbook"
						/>
					</div>
					<div className="home__row">
						<Product
							id="10125"
							title="LEFTSIDE Women Handbag 2018 Designer Small Hand Bags Female PU Leather Strap"
							price={109.89}
							rating={4}
							image="https://ae01.alicdn.com/kf/HTB1JvrkklyWBuNkSmFPq6xguVXat/LEFTSIDE-Women-Handbag-2018-Designer-Small-Hand-Bags-Female-PU-Leather-Handbag-Shoulder-Bag-For-Girls.jpg"
							alt="product-pocketbook"
						/>
						<Product
							id="15125"
							title="Women Hollow Texture Small Crossbody Bags Cell Phone Purse Wallet For Women"
							price={53.96}
							rating={3}
							image="https://i5.walmartimages.com/asr/694d9f55-e423-448e-9dce-fac8c3b84839_1.161399b7b80e3074931909e6af65fa8c.jpeg"
							alt="product-pocketbook"
						/>
						<Product
							id="18925"
							title="Laptop Tote Bag for Women Teacher Work Office USB Bags Fits 15.6 inches Laptop"
							price={37.96}
							rating={4}
							image="https://www.abeax.com/wp-content/uploads/2019/12/71NYwqV4otL._UL1500_.jpg"
							alt="product-pocketbook"
						/>
					</div>
					<div className="home__row">
						<Product
							id="10999"
							title="Bolish Casual Women Soft Pu Leather Handbag Female Shoulder Bag Messenger Bag Larger Size Winter Women Bag"
							price={46.96}
							rating={5}
							image="http://bigxmarket.com/wp-content/uploads/2018/05/Bolish-Casual-Women-Soft-Pu-Leather-Handbag-Female-Shoulder-Bag-Messenger-Bag-Larger-Size-Winter-Women-2.jpg"
							alt="product-pocketbook"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
