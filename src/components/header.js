import React from "react";
// import "./HeaderNews.css";
// import logo_Alta from "../img/news.png";
import { Link } from "react-router-dom";
// import Category from "./Category";
// import SearchField from "react-search-field";

function Header(props) {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 ">
              <div className="logo">
                <a href="home.html">
                  <img src="" alt="" id="logo" width="60px" />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <ul className="menu">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/profile">profile</Link>
                </li>
                <li>
                  <Link to="/signin">sign in</Link>
                </li>
                <li>
                  <Link to="/">sign out</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Category /> */}
      </header>
    </div>
  );
}

export default Header;
