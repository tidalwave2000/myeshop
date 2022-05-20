import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route exact path="/checkout" element={<Checkout />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
