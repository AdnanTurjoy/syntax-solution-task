import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthProvider } from "../App";
import "../css/style.css";
function Header(props) {
  const { admin, setAdmin, userLoggedIn, setUserLoggedIn } =
    useContext(AuthProvider);
  const history = useHistory();
  const handleLogout = () => {
    setAdmin(false);
    setUserLoggedIn(false);
    history.push("/login");
  };
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Sailor</a>
          </h1>
          <a href="index.html" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li className="dropdown">
                <a href="#">
                  <span>About</span> <i className="bi bi-chevron-down"></i>
                </a>
              </li>
              <li>
                <Link to={"/services"} className="active">
                  Services
                </Link>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>

              <li>
                <a href="contact.html">Contact</a>
              </li>
              {!userLoggedIn ? (
                <>
                  {" "}
                  <li>
                    <Link to={"/login"} className="getstarted">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to={"/signup"} className="getstarted">
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link onClick={handleLogout} className="getstarted">
                    Log Out
                  </Link>
                </li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
