import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <NavLink to="/" className={"navlink"}>
          <img src={process.env.PUBLIC_URL + "/images/cinemalogoo.png"} alt="Cinema Logo" />
        </NavLink>
        <h1 className="header-title">Movies Data CINEMA</h1>
        <div className="login-div">
          <NavLink to="/login" className={"navlink"} id={"nav-login"}>
            Profile
          </NavLink>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
