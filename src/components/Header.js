import React from "react";
import "../css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
    return (
			<div className="header">
				{/* Header logo section */}
				<div className="header__logo">
					<StoreIcon className="header__logoImage" fontSize="large" />
					<h2 className="header__logoTitle"> &nbsp;myShop</h2>
				</div>
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
					<div className="nav__itemBasket">
						<ShoppingBasketIcon />
						<span className="nav__itemLineTwo nav__basketCount">0</span>
					</div>
				</div>
			</div>
		);
};

export default Header;