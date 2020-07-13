import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/home" className="item">
				post home
			</Link>
			<div className="right menu">
				<Link to="/extra" className="item">
					post extra
				</Link>
			</div>
		</div>
	)
};

export default Header;