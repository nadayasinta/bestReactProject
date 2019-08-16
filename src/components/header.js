import React from "react";
// import "./HeaderNews.css";
// import logo_Alta from "../img/news.png";
import { Link } from "react-router-dom";
// import Category from "./Category";
// import SearchField from "react-search-field";
import { connect } from "unistore/react";
import { actions } from "../store/store";

function Header(props) {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Link
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link disabled"
                                href="#"
                                tabindex="-1"
                                aria-disabled="true"
                            >
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
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
                                <Link to="/" onClick={() => props.logOut()}>
                                    sign out
                                </Link>
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

export default connect(
    "isLogin",
    actions
)(Header);
