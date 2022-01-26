import React, { useState, useEffect } from 'react';
import Logo from "../assets/bblogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {

	const [openLinks, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const toggleNavbar = () => {
		setToggleMenu(!openLinks);
	};

	useEffect(() => {

		const changeWidth = () => {
		  setScreenWidth(window.innerWidth);
		}

		window.addEventListener('resize', changeWidth)
		return () => {
			window.removeEventListener('resize', changeWidth)
		}

	  }, [])

	return (
		<div className="navbar">
			<div className="leftSide">
			<img src = {Logo} alt="Logo"/>
				{(openLinks || screenWidth > 600) && (
				<div className="hiddenLinks">
				<Link to="/"> Home </Link>
			    <Link to="/quiz"> Quiz </Link>
			    <Link to="/about"> About </Link>
				<Link to="/results"> Results </Link>

				</div>)}

			</div>

			<div className="rightSide">
				<Link to="/"> Home </Link>
			    <Link to="/quiz"> Quiz </Link>
			    <Link to="/about"> About </Link>
				<Link to="/results"> Results </Link>
			    <button onClick={toggleNavbar}>
					<ReorderIcon />
			    </button>
			</div>
		</div>
	);
}

export default Navbar;
