import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/checkout" element={<Checkout />}>
					<Header />
					<Checkout />
        </Route>
        
        <Route exact path="/" element={<Home />}>
          <Header />
          <Home />
        </Route>
			</Routes>

			
		</div>
	);
};

export default App;
