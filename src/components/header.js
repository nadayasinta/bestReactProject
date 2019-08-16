import React from "react";
// import "./HeaderNews.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
// import Category from "./Category";
// import SearchField from "react-search-field";
import { connect } from "unistore/react";
import { actions } from "../store/store";

function Header(props) {
    return (
        <div>
            <header>
                <div className="container-fluid ">
                    <div className="row shadow-sm justify-content-center">
                        <div className="col-md-12 text-center">
                            <ul className="menu px-0">
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
                                    <Link to="/" onClick={() => props.logOut()}>
                                        sign out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container-fluid  pt-5 ">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="jumbo text-center shadow-lg py-2">
                            <img src={logo} alt="" class="logo" />
                            <h2 className="title">ASTROLOGY MASTER </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    "isLogin",
    actions
)(Header);
