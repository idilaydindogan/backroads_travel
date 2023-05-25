import React from "react";
import Logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={Logo} className="nav-logo" alt="backroads" />
					<button type="button" className="nav-toggle" id="nav-toggle">
						<i className="fas fa-bars"></i>
					</button>
				</div>

				<ul className="nav-links" id="nav-links">
					{pageLinks.map((link) => {
						return (
							<li key={link.id}>
								<a href={link.href} className="nav-link">
									{link.text}
								</a>
							</li>
						);
					})}
				</ul>

				<ul className="nav-icons">
					{socialLinks.map((social) => {
						return (
							<li>
								<a href={social.href} className="nav-icon">
									<i className={social.icon}></i>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
