import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [toggleLogin, setToggleLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Cravory-Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setToggleLogin(toggleLogin === "Login" ? "Logout" : "Login");
            }}
          >
            {toggleLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
