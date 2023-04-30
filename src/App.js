import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
        <Card />
			</div>
		</Router>
	);
}

export default App;
