import React from 'react';
import './Header.scss';
// import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {


	return (<>

		<div className="header_container">

				<div className="logo_container">
					<img className="logo" src={logo} alt="galera" />
				</div>
			</div>
	</>)
}

export default Header;