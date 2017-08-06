import React from 'react';
import { NavLink } from 'react-router-dom';

type NavbarProptypes = {
  toggleSideBar: () => void
};

export default function Navbar({ toggleSideBar }: NavbarProptypes) {
  return (
    <nav className="pt-navbar">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">
          <button
            className="pt-button pt-minimal pt-icon-menu"
            onClick={() => toggleSideBar()}
          />
          <NavLink to="/">Optimal-Compta</NavLink>
        </div>
        <input className="pt-input" placeholder="Search files..." type="text" />
      </div>
      <div className="pt-navbar-group pt-align-right">
        <button className="pt-button pt-minimal pt-icon-home">Home</button>
        <button className="pt-button pt-minimal pt-icon-document">Files</button>
        <span className="pt-navbar-divider" />
        <button className="pt-button pt-minimal pt-icon-user" />
        <button className="pt-button pt-minimal pt-icon-notifications" />
        <button className="pt-button pt-minimal pt-icon-cog" />
      </div>
    </nav>
  );
}
