import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
	return (
		<div className="home">
			<div className="headerContainer">
				<h1> Invest Now </h1>
			    <p> Stocks to Fit Your Needs </p>
				<Link to="/quiz">
				<button> START QUIZ </button>
				</Link>
			</div>
		</div>
	);
}

export default Home
