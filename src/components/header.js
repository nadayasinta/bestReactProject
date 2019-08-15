import React from "react";
// import "./HeaderNews.css";
// import logo_Alta from "../img/news.png";
import { Link } from "react-router-dom";
// import Category from "./Category";
// import SearchField from "react-search-field";

function Header(props) {
  return (
    <header>
      <div className="container-fluid ">
        <div className="row shadow-sm">
          <div className="col-md-12">
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
      <div className="container-fluid shadow">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="jumbo">
              <h1 className="title">Astrology Master</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
