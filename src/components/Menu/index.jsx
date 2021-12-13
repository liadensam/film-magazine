import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	
  const menuClass = ({isActive}) => isActive ? 'mainMenu' : '';
  
  return (


		<nav className="menu">
      {/* <NavLink className={({isActive}) => isActive ? 'mainMenu' : '' } to="/">Home /</NavLink> */}
      <NavLink className={menuClass} to="/">Home /</NavLink>
      <NavLink className={menuClass} to="/reviews">Reviews /</NavLink>
      <NavLink className={menuClass} to="/articles">Articles /</NavLink>
      <NavLink className={menuClass} to="/movies">Movies</NavLink>
    </nav>

	);
}

export default Menu;






