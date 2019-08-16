import React from "react";
// import "./HeaderNews.css";
import logo from "../images/logo.png";
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
                                <Link to="/" class="h2">
                                    home
                                </Link>
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
            <div className="container-fluid ">
                <div className="row p-0">
                    <div className="col-md-12 p-0">
                        <div className="jumbo text-center shadow py-2">
                            <img src={logo} alt="" class="logo" />
                            <h2 className="title">ASTROLOGY MASTER </h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
