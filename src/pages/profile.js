import React from "react";
import { Redirect } from "react-router-dom";
// import Header from "../component/Header";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Avatar from "../images/man.png";

const Profile = props => {
    const is_login = props.isLogin;
    const username = props.username;
    const email = props.email;
    console.log("username", username);

    if (false) {
        return <Redirect to={{ pathname: "/Signin" }} />;
    } else {
        return (
            <div className="content profile-page">
                {/* <Header /> */}
                <div className="row justify-content-center ">
                    <div className="col-md-6 text-center">
                        <h1 style={{ textAlign: "center" }}>Profile</h1>
                        <img
                            src={Avatar}
                            className="profile-image"
                            width="256px"
                            height="256px"
                        />
                        <p>
                            <label>Username:</label> {username}
                        </p>
                        <p>
                            <label>Email:</label> {email}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect(
    "username, password, isLogin, email",
    actions
)(Profile);
