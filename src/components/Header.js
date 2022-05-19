import React from "react";
import "../css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			{/* Header logo section */}
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="header__logo">
					<StoreIcon className="header__logoImage" fontSize="large" />
					<h2 className="header__logoTitle"> &nbsp;myShop</h2>
				</div>
			</Link>
			{/* Header Search Bar section */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			{/* Header navigation section */}
			<div className="header__nav">
				{/* Sign-in section */}
				<div className="nav__item">
					<span className="nav__itemLineOne">Hello Guest</span>
					<span className="nav__itemLineTwo">Sign In</span>
				</div>
				{/* your shop section */}
				<div className="nav__item">
					<span className="nav__itemLineOne">Your</span>
					<span className="nav__itemLineTwo">Shop</span>
				</div>
				{/* Shopping cart section */}
				<Link to="/checkout" style={{ textDecoration: "none" }}>
					<div className="nav__itemBasket">
						<ShoppingBasketIcon />
						<span className="nav__itemLineTwo nav__basketCount">0</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
