import React from 'react';
import { StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink } from '../styled/Navbar';
import { Accent } from '../styled/Utils';
export const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledNavBrand>
				<StyledLink to='/'>
					Learn.Build.<Accent>Type.</Accent>
				</StyledLink>
			</StyledNavBrand>
			<StyledNavItems>
				<li>
					<StyledLink to='/'>Home</StyledLink>
				</li>
				<li>
					<StyledLink to='/highScore'>Scores</StyledLink>
				</li>
			</StyledNavItems>
		</StyledNavbar>
	);
};

export default Navbar;
