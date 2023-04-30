// import { slide as Menu } from "react-burger-menu";
// import React, { useState } from "react"; // importing usestate
import "./navbar.css";
import neofilogo from "../../assets/logo/neofiLogo.png"
import { Link } from 'react-router-dom';

function Navbar() {
	// const [isOpen, setIsOpen] = useState(false); // Create a new state variable in your component to store the open/close state of the mobile menu.
	// const handleMenuButtonClick = () => {
	// 	setIsOpen(!isOpen);
	// }; // Add an event handler function to toggle the value of the "isOpen" state variable.

	return (
		<nav className="navbar">
			<div className="logo">
				<img src={neofilogo} alt="logo" />
			</div>
			{/* <Menu isOpen={isOpen} right> */}
				
				{/* Add the "Menu" component in your JSX code to display the hamburger button. */}
				<ul className="nav-links">
					<li>
						<Link to="https://google.com" className="nav-links-elements">Trade</Link>
					</li>
					<li>
          <Link to="https://google.com" className="nav-links-elements">Earn</Link>
					</li>
					<li>
          <Link to="https://google.com" className="nav-links-elements">Support</Link>
					</li>
					<li>
          <Link to="https://google.com" className="nav-links-elements">About</Link>
					</li>
				</ul>
				<button className="connect-wallet-btn">Connect Wallet</button>
			{/* </Menu>
      <button onClick={handleMenuButtonClick}>Open Menu</button> */}
		</nav>
	);
}

export default Navbar;
