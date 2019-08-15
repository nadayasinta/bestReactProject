import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/header";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Avatar from "../images/man.png";

const Profile = props => {
    const is_login = props.isLogin;
    const username = props.username;
    const email = props.email;
    const full_name = props.full_name;
    console.log("name", full_name);

    if (!is_login) {
        return <Redirect to={{ pathname: "/Signin" }} />;
    } else {
        return (
            <div>
                <Header />
                <div className="content profile-page">
                    <div className="row justify-content-center ">
                        <div className="col-md-6 text-center">
                            <h1
                                style={{ textAlign: "center" }}
                                className="animated fadeInLeftBig"
                            >
                                Welcome, {full_name}
                            </h1>
                            <img
                                src={Avatar}
                                className="profile-image animated fadeInLeftBig"
                                width="256px"
                                height="256px"
                            />
                            <p>
                                <label className="animated fadeInLeftBig">
                                    Username
                                </label>
                                <br />
                                <label className="animated fadeInLeftBig">
                                    {username}
                                </label>
                            </p>
                            <p>
                                <label className="animated fadeInLeftBig">
                                    Email
                                </label>
                                <br />
                                <label className="animated fadeInLeftBig">
                                    {email}
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect(
    "username, password, isLogin, email, full_name",
    actions
)(Profile);
